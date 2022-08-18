<template>
  <v-card
    :loading="fromLoading"
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
import { mapState } from "vuex";
import AuctionStepOnePreview from "./Step1.vue";
import AuctionStepTwoPreview from "./Step2.vue";
import AuctionStepThreePreview from "./Step3.vue";
import AuctionStepFourPreview from "./Step4.vue";
import AuctionStepFivePreview from "./Step5.vue";
export default {
  components: {
    AuctionStepOnePreview,
    AuctionStepTwoPreview,
    AuctionStepThreePreview,
    AuctionStepFourPreview,
    AuctionStepFivePreview,
  },
  computed: {
    ...mapState({
      fromLoading: (state) => state.fromLoading,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
