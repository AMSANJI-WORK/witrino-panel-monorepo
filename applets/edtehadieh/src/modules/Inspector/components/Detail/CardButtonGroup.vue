<template>
  <v-col
    cols="12"
    sm="6"
    class="d-lg-flex d-none flex-wrap align-content-center"
  >
    <v-col cols="12" md="6" class="pa-1">
      <v-btn color="light-blue" block class="white--text mx-1">
        <v-icon>mdi-send</v-icon>
        &nbsp; ارسال پیام
      </v-btn>
    </v-col>

    <v-col cols="12" md="6" class="pa-1">
      <v-btn color="yellow darken-3" block class="white--text">
        <v-icon>mdi-power</v-icon>

        غیرفعال سازی
      </v-btn>
    </v-col>
  </v-col>
</template>

<script>
import WitrinoPage from "@commen/icons/components/WitrinoPage.vue";
import PolotikPage from "@commen/icons/components/PolotikPage.vue";
export default {
  components: {
    WitrinoPage,
    PolotikPage,
  },
};
</script>

<style lang="scss" scoped></style>
