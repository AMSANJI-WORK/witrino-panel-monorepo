<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold"
      card-title-class="px-0"
      title="بازرسان"
    >
    </SectionDivider>
    <DataTable />
  </v-sheet>
</template>

<script>
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
import DataTable from "@applets/syndicate/src/modules/Inspector/components/DataTable/InspectorList.vue";
export default {
  components: {
    SectionDivider,
    DataTable,
  },
};
</script>

<style lang="scss" scoped>

</style>
