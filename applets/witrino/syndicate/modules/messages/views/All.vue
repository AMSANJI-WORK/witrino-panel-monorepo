<template>
  <v-sheet class="transparent mx-2">
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <ProjectIcons
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :col-size-md="4"
        :key="index"
      />
    </v-sheet>
    <section-divider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="همه پیام ها"
    >
    </section-divider>
    <data-table />
  </v-sheet>
</template>

<script>
import boxTopData from "@applets/witrino/syndicate/modules/messages/mock/boxTop";
import ProjectIcons from "@applets/witrino/syndicate/modules/messages/components/ProjectIcons.vue";
import DataTable from "@applets/witrino/syndicate/modules/messages/components/All/DataTable.vue";
import SectionDivider from '@applets/commen/section-divider/components/SectionDivider.vue';
export default {
  components: {
    ProjectIcons,
    DataTable,
    SectionDivider,
  },
  data() {
    return {
      boxTopData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
