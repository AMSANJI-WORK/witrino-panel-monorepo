<template>
  <v-sheet class="mx-2 transparent">
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <ProjectIcons
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :key="index"
      />
    </v-sheet>
    <LocationList :lat="55.05" :long="55.05" />
    <SectionDivider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="واحد های صنفی"
    />
    <DataTable />
  </v-sheet>
</template>

<script>
import boxTopData from "@applets/witrino/syndicate/modules/tradeUnit/mock/boxTop";
import ProjectIcons from "@applets/witrino/syndicate/modules/tradeUnit/components/ProjectIcons.vue";
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
import LocationList from "@applets/witrino/syndicate/modules/tradeUnit/components/LocationList.vue";
import DataTable from "@applets/witrino/syndicate/modules/tradeUnit/components/DataTable/UnitList.vue";
export default {
  components: {
    SectionDivider,
    LocationList,
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
