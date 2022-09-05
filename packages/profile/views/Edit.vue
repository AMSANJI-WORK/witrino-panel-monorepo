<template>
  <v-sheet class="transparent">
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="ویرایش پروفایل"
    />
    <v-sheet class="mx-2 rounded-lg">
      <ModifyTabs />
    </v-sheet>
  </v-sheet>
</template>

<script>
import ModifyTabs from "@packages/profile/components/Tabs.vue";
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
export default {
  components: {
    ModifyTabs,
    SectionDivider,
  },
  computed: {
    zoneList() {
      return this.$store.getters["shared/zone/zoneList"];
    },
  },
  methods: {
    getAllZone() {
      this.$store.dispatch("shared/zone/get/GET_ALL_ZONE_ASYNC", {
        max_no: "1277",
      });
    },
  },
  created() {
    if (this.zoneList.length == 0) this.getAllZone();
  },
};
</script>

<style lang="scss" scoped></style>
