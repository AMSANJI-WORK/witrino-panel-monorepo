<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <CardInfoDashboard
        v-for="(icon, index) in boxTopData"
        :key="index"
        :col-size-md="4"
        :data-source="icon"
      />
    </v-sheet>
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="فروش"
    >
    </SectionDivider>
    <DataTable />
  </v-sheet>
</template>

<script>
import CardInfoDashboard from "@commen/card/components/Dashboard.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import DataTable from "./DataTable.vue";
import boxTopData from "@applets/admin/src/modules/Sell/mock/boxTop";
export default {
  data() {
    return {
      boxTopData,
    };
  },
  components: {
    SectionDivider,
    CardInfoDashboard,
    DataTable,
  },
};
</script>

<style lang="scss" scoped></style>
