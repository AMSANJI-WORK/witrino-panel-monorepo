<template>
  <v-sheet class="transparent mx-2">
    <SectionDivider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="امورمالی"
    />
    <DataTable />
  </v-sheet>
</template>
<script>
import DataTable from "@applets/syndicate/src/modules/Financial/components/DataTable.vue";
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
export default {
  components: {
    DataTable,
    SectionDivider,
  },
};
</script>
<style lang="scss" scoped></style>
