<template>
  <v-sheet class="mx-2 transparent">
    <div class="d-flex flex-wrap justify-space-around align-self-stretch my-4">
      <CardInfoDashboard
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
import CardInfoDashboard from "@applets/commen/card/components/Dashboard.vue";
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
import LocationList from "@applets/witrino/admin/modules/branchs/components/LocationList.vue";
import DataTable from "@applets/witrino/admin/modules/branchs/components/DataTable/BranchList.vue";
import boxTopData from "@applets/witrino/admin/modules/branchs/mock/boxTop";
export default {
  components: {
    CardInfoDashboard,
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
