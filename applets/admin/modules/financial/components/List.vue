<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="امور مالی"
    >
    </SectionDivider>
    <DataTable />
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="چارت امور مالی"
    >
    </SectionDivider>
    <Chart />
  </v-sheet>
</template>

<script>
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
import DataTable from "./DataTable.vue";
import Chart from "./Chart.vue";
export default {
  data() {
    return {};
  },
  components: {
    SectionDivider,
    DataTable,
    Chart,
  },
};
</script>

<style lang="scss" scoped>

</style>
