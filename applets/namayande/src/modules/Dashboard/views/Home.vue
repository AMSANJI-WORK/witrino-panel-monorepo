<template>
  <v-sheet class="transparent">
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <CardInfoDashboard
        v-for="(icon, index) in boxTopData"
        :data-source="icon"
        :key="index"
      />
    </v-sheet>
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
    <SectionDivider
      title-class="text-subtitle-2"
      bind-class="my-4"
      title="بنرهای شما"
    >
      <template #action>
        <v-btn color="grey darken-2" text x-small>مشاهده همه</v-btn>
      </template>
    </SectionDivider>
    <Banner />
  </v-sheet>
</template>

<script>
import boxTopData from "@applets/namayande/src/modules/Dashboard/mock/boxTop";
import CardInfoDashboard from "@commen/card/components/Dashboard.vue";
import Banner from "@applets/namayande/src/modules/Dashboard/components/Banner.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import NotificationProduct from "@commen/card/components/NotificationProduct.vue";
export default {
  components: {
    CardInfoDashboard,
    Banner,
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
