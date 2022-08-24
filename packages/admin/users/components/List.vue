<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <DashboardProjectIcons
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :colSizeMd="4"
        :key="index"
      />
    </v-sheet>
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="لیست کاربران"
    >
      <template #action>
        <table-btn-create> افزودن کاربر </table-btn-create>
      </template>
    </SectionDivider>
    <DataTable />
  </v-sheet>
</template>

<script>
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import DashboardProjectIcons from "@shared/components/ProjectIcons.vue";
import boxTopData from "../mock/boxTop";
import TableBtnCreate from "@shared/components/Reusable/TableBtnCreate.vue";
import DataTable from "./DataTable.vue";
export default {
  components: {
    DashboardProjectIcons,
    SectionDivider,
    TableBtnCreate,
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
