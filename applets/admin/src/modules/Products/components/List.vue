<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <div class="d-flex flex-wrap justify-space-around align-self-stretch my-4">
      <CardInfoDashboard
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :col-size-md="4"
        :key="index"
      />
    </div>
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="لیست محصولات"
    />
    <DataTable />
  </v-sheet>
</template>

<script>
import CardInfoDashboard from "@commen/card/components/Dashboard.vue";
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
import boxTopData from "@applets/admin/src/modules/Products/mock/boxTop";
import DataTable from "./DataTable.vue";
export default {
  components: {
    CardInfoDashboard,
    SectionDivider,
    DataTable,
  },
  data() {
    return {
      boxTopData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
