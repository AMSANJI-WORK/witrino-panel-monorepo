<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="لیست محصولات"
    >
      <template #action>
        <v-btn color="primary" class="white--text rounded-lg" link to="create">
          افزودن محصول جدید
        </v-btn>
      </template>
    </SectionDivider>
    <DataTable />
  </v-sheet>
</template>

<script>
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
import DataTable from "./DataTable.vue";
export default {
  components: {
    SectionDivider,
    DataTable,
  },
};
</script>

<style lang="scss" scoped></style>
