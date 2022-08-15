<template>
  <v-sheet class="transparent mx-2">
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <ProjectIcons
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :colSizeMd="4"
        :key="index"
      />
    </v-sheet>
    <section-divider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="پیام های ارسال شده"
    >
    </section-divider>
    <data-table />
  </v-sheet>
</template>

<script>
import boxTopData from "@edtehadieh/modules/Messages/mock/boxTop";
import ProjectIcons from "@edtehadieh/modules/Messages/components/ProjectIcons.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import DataTable from "@edtehadieh/modules/Messages/components/Sent/DataTable.vue";
export default {
  components: {
    ProjectIcons,
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
