<template>
  <v-sheet class="transparent">
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
    <SectionDivider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="تیکت ها"
    >
      <template #action>
        <v-btn color="grey darken-2" text x-small>مشاهده همه</v-btn>
      </template>
    </SectionDivider>
    <NotificationProduct />
  </v-sheet>
</template>

<script>
import boxTopData from "@applets/admin/src/modules/Dashboard/mock/boxTop";
import ProjectIcons from "@shared/components/ProjectIcons.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import NotificationProduct from "@shared/components/NotificationProduct.vue";
export default {
  components: {
    ProjectIcons,
    SectionDivider,
    NotificationProduct,
  },
  data() {
    return {
      boxTopData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
