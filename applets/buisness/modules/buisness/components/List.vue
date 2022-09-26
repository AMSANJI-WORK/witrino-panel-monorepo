<template>
  <v-sheet class="mx-2 transparent">
    <SectionDivider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="لیست کسب و کار ها"
    />
    <DataTable />
  </v-sheet>
</template>

<script>
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
import DataTable from "./DataTable.vue";
export default {
  components: {
    SectionDivider,
    DataTable,
  },
};
</script>

<style lang="scss" scoped></style>
