<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <section-divider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="لیست سطوح دسترسی"
    >
      <template #action>
        <DialogModify v-model ="dialog" />
      </template>
    </section-divider>
    <DataTable />
  </v-sheet>
</template>

<script>
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
import DialogModify from "./DialogModify.vue";
import DataTable from "./DataTable.vue";
export default {
  components: {
    SectionDivider,
    DialogModify,
    DataTable,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
