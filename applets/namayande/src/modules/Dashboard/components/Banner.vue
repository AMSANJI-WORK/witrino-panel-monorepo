<template>
  <v-card class="banner-bg mx-2 rounded-lg">
    <v-card-text class="d-flex flex-wrap ma-0">
      <v-col cols="12" sm="6" style="width: 100%" class="d-flex">
        <div class="my-auto">
          <h2 class="white--text my-2">با ما راحت تر بشینید</h2>
          <h1 class="text-h6 font-weight-normal">
            مبلمان گروه تولیدی و صنعتی حسام
          </h1>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex">
        <SofaBanner class="mx-auto" />
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
import SofaBanner from "@shared/components/Icons/SofaBanner.vue";
export default {
  components: {
    SofaBanner,
  },
};
</script>

<style lang="scss" scoped>
.banner-bg {
  background: url(@shared/assets/image/svg/WBannerBackground.svg) no-repeat center;
  background-size: cover;
}
.v-application .text-h6 {
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: Vazir !important;
}
</style>
