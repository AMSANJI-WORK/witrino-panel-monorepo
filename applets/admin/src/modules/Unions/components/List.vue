<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <!-- <div class="d-flex flex-wrap justify-space-around align-self-stretch">
      <DashboardProjectIcons
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :colSizeMd="4"
        :key="index"
      />
    </div> -->
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="لیست اتحادیه ها"
    >
      <template #action>
        <v-btn color="primary" class="white--text rounded-lg" link to="create">
          افزودن اتحادیه جدید
        </v-btn>
      </template>
    </SectionDivider>
    <DataTable />
  </v-sheet>
</template>

<script>
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import DashboardProjectIcons from "@shared/components/ProjectIcons.vue";
import boxTopData from "@applets/admin/src/modules/Unions/mock/boxTop";
import DataTable from "./DataTable.vue";
export default {
  components: {
    DashboardProjectIcons,
    SectionDivider,
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
