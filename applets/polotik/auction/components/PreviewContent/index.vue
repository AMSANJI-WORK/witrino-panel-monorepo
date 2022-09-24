<template>
  <v-card
    :loading="formLoading"
    class="d-flex flex-row flex-wrap rounded-lg mx-0 elevation-0"
  >
    <auction-step-one-preview />
    <auction-step-two-preview />
    <auction-step-three-preview />
    <auction-step-four-preview />
    <auction-step-five-preview />
  </v-card>
</template>

<script>
import auctionLoadingMixin from "@applets/polotik/auction/mixins/loading";

import AuctionStepOnePreview from "./Step1.vue";
import AuctionStepTwoPreview from "./Step2.vue";
import AuctionStepThreePreview from "./Step3.vue";
import AuctionStepFourPreview from "./Step4.vue";
import AuctionStepFivePreview from "./Step5.vue";
export default {
  mixins: [auctionLoadingMixin],
  components: {
    AuctionStepOnePreview,
    AuctionStepTwoPreview,
    AuctionStepThreePreview,
    AuctionStepFourPreview,
    AuctionStepFivePreview,
  },
};
</script>

<style lang="scss" scoped></style>
