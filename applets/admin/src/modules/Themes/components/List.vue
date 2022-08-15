<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="لیست تم ها"
    >
    </SectionDivider>
    <DataTable />
  </v-sheet>
</template>

<script>
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import DashboardProjectIcons from "@shared/components/ProjectIcons.vue";
import DataTable from "./DataTable.vue";
export default {
  components: {
    DashboardProjectIcons,
    SectionDivider,
    DataTable,
  },
};
</script>

<style lang="scss" scoped></style>
