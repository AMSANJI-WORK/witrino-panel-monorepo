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
import ModifyTabs from "../components/Tabs.vue";
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
import ZoneMixin from "@applets/commen/zone/mixin/zone";
export default {
  mixins: [ZoneMixin],
  components: {
    ModifyTabs,
    SectionDivider,
  },
  created() {
    if (this.zoneList.length == 0)
      this.getAllZone({
        service: "Zone",
        payload: {
          max_no: "1277",
        },
      });
  },
};
</script>

<style lang="scss" scoped></style>
