<template>
  <v-sheet class="transparent mx-2">
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <ProjectIcons
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :key="index"
        :col-size-md="4"
      />
    </v-sheet>
    <section-divider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="پیام های خوانده نشده"
    >
    </section-divider>
    <data-table />
  </v-sheet>
</template>

<script>
import boxTopData from "@applets/syndicate/modules/messages/mock/boxTop";
import ProjectIcons from "@applets/syndicate/modules/messages/components/ProjectIcons.vue";
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
import DataTable from "@applets/syndicate/modules/messages/components/Unread/DataTable.vue";
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
