<template>
  <v-sheet class="mx-2 transparent">
    <v-sheet
      class="d-flex flex-wrap justify-space-between align-self-stretch transparent"
    >
      <ProjectIcons
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :col-size-md="4"
        :key="index"
      />
    </v-sheet>
    <SectionDivider
      title-class="text-subtitle-2"
      bind-class="mb-5"
      title="شکایات"
    />
    <DataTable />
  </v-sheet>
</template>

<script>
import boxTopData from "@applets/witrino/syndicate/modules/complaint/mock/boxTop";
import ProjectIcons from "@applets/witrino/syndicate/modules/complaint/components/ProjectIcons.vue";
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
import DataTable from "@applets/witrino/syndicate/modules/complaint/components/DataTable.vue";
export default {
  components: {
    SectionDivider,
    DataTable,
    ProjectIcons,
  },
  data() {
    return {
      boxTopData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
