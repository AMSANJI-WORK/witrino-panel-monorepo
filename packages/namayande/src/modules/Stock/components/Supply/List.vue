<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="انبارداری"
    >
    </SectionDivider>
    <DataTable />
  </v-sheet>
</template>

<script>
import DashboardProjectIcons from "@shared/components/ProjectIcons.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import DataTable from "../Supply/DataTable.vue";
import boxTopData from "@namayande/modules/Stock/mock/boxTop";
export default {
  data() {
    return {
      boxTopData,
    };
  },
  components: {
    SectionDivider,
    DashboardProjectIcons,
    DataTable,
  },
};
</script>

<style lang="scss" scoped></style>
