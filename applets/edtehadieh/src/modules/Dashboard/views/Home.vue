<template>
  <v-sheet class="transparent">
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <ProjectIcons
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :key="index"
      />
    </v-sheet>

    <LocationList :lat="51.504" :long="-0.159" />
    <SectionDivider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="اطلاعیه ها"
    >
      <template #action>
        <v-btn color="grey darken-2" text x-small>مشاهده همه</v-btn>
      </template>
    </SectionDivider>
    <NotificationProduct />
  </v-sheet>
</template>

<script>
import boxTopData from "@applets/edtehadieh/src/modules/Dashboard/mock/boxTop";
import ProjectIcons from "@shared/components/ProjectIcons.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import NotificationProduct from "@shared/components/NotificationProduct.vue";
import LocationList from "@applets/edtehadieh/src/modules/Dashboard/components/LocationList.vue";
export default {
  components: {
    ProjectIcons,
    SectionDivider,
    NotificationProduct,
    LocationList,
  },
  data() {
    return {
      boxTopData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
