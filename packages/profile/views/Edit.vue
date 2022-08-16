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
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";

export default {
  components: {
    ModifyTabs,
    SectionDivider,
  },
};
</script>

<style lang="scss" scoped></style>
