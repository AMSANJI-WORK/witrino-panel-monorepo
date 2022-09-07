<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="لیست اپراتور ها"
    >
      <template #action>
        <v-btn
          color="primary"
          class="white--text rounded-lg"
          link
          to="/operator/create"
        >
          افزودن اپراتور جدید
        </v-btn>
      </template>
    </SectionDivider>
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
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
