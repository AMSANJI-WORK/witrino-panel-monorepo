<template>
  <v-col
    cols="12"
    sm="6"
    class="d-sm-flex d-none flex-wrap align-content-center"
  >
    <v-col cols="12" md="6" class="pa-1">
      <v-btn color="lighten-green" block class="white--text">
        <witrino-page />
        &nbsp; صفحه ویترینو
      </v-btn>
    </v-col>

    <v-col cols="12" md="6" class="pa-1">
      <v-btn color="light-red" block class="white--text">
        <polotik-page />
        &nbsp; صفحه پلتیک
      </v-btn>
    </v-col>

    <v-col cols="12" md="6" class="pa-1">
      <v-btn color="yellow darken-3" block class="white--text">
        <v-icon>mdi-power</v-icon>
        غیرفعال سازی
      </v-btn>
    </v-col>

    <v-col cols="12" md="6" class="pa-1">
      <v-btn color="grey-blue" block class="white--text">
        <v-icon left> mdi-send</v-icon>
        ارسال پیام
      </v-btn>
    </v-col>
  </v-col>
</template>

<script>
import WitrinoPage from "@applets/commen/icons/components/WitrinoPage.vue";
import PolotikPage from "@applets/commen/icons/components/PolotikPage.vue";
export default {
  components: {
    WitrinoPage,
    PolotikPage,
  },
};
</script>

<style lang="scss" scoped></style>
