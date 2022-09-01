<template>
  <v-sheet class="mx-2 rounded-lg transparent">
    <div class="d-flex flex-wrap justify-space-around align-self-stretch my-4">
      <DashboardProjectIcons
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :col-size-md="4"
        :key="index"
      />
    </div>
    <SectionDivider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="لیست محصولات"
    >
      <!-- <template #action>
        <v-btn
          color="primary"
          class="white--text rounded-lg"
          link
          to="/product/create"
        >
          افزودن محصول جدید
        </v-btn>
      </template> -->
    </SectionDivider>
    <DataTable />
  </v-sheet>
</template>

<script>
import DashboardProjectIcons from "@shared/components/ProjectIcons.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import boxTopData from "@applets/admin/src/modules/Products/mock/boxTop";
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
