<template>
  <v-col cols="12" sm="6" class="d-flex flex-wrap justify-center">
    <v-btn color="lighten-green" small class="white--text ma-1">
      <witrino-page />
      &nbsp; ویترینو
    </v-btn>
    <v-btn color="light-red" small class="white--text ma-1">
      <polotik-page />
      &nbsp; پلتیک
    </v-btn>

    <v-btn color="yellow darken-3" small class="white--text ma-1">
      <v-icon>mdi-power</v-icon>

      غیرفعال سازی
    </v-btn>

    <v-btn color="grey-blue" small class="white--text ma-1">
      <v-icon left> mdi-send</v-icon>
      ارسال پیام
    </v-btn>
  </v-col>
</template>

<script>
import WitrinoPage from "@shared/components/Icons/WitrinoPage.vue";
import PolotikPage from "@shared/components/Icons/PolotikPage.vue";
export default {
  components: {
    WitrinoPage,
    PolotikPage,
  },
};
</script>

<style lang="scss" scoped></style>
