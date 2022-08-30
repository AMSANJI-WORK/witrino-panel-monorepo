<template>
  <v-sheet class="mx-2 transparent">
    <div class="d-flex flex-wrap justify-space-around align-self-stretch my-4">
      <DashboardProjectIcons
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :col-size-md="3"
        :key="index"
      />
    </div>
    <LocationList :lat="55.05" :long="55.05" />
    <SectionDivider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="نمایندگی ها"
    />
    <DataTable />
  </v-sheet>
</template>

<script>
import DashboardProjectIcons from "@shared/components/ProjectIcons.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import LocationList from "@applets/admin/src/modules/Branchs/components/LocationList.vue";
import DataTable from "@applets/admin/src/modules/Branchs/components/DataTable/BranchList.vue";
import boxTopData from "@applets/admin/src/modules/Branchs/mock/boxTop";
export default {
  components: {
    DashboardProjectIcons,
    SectionDivider,
    LocationList,
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
