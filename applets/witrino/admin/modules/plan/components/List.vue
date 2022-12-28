<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="لیست پلن ها"
    >
      <template #action>
        <table-btn-create> افزودن پلن </table-btn-create>
      </template>
    </SectionDivider>
    <DataTable />
  </v-sheet>
</template>

<script>
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
import TableBtnCreate from "@shared/components/Reusable/TableBtnCreate.vue";
import DataTable from "./DataTable.vue";
export default {
  components: {
    SectionDivider,
    TableBtnCreate,
    DataTable,
  },
};
</script>

<style lang="scss" scoped></style>
