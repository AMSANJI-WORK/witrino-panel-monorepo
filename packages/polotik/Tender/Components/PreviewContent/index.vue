<template>
  <v-card
    :loading="fromLoading"
    class="d-flex flex-row flex-wrap rounded-lg mx-0 elevation-0"
  >
    <tender-step-one-preview />
    <tender-step-two-preview />
    <tender-step-three-preview />
    <tender-step-four-preview />
    <tender-step-five-preview />
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import TenderStepOnePreview from "./Step1.vue";
import TenderStepTwoPreview from "./Step2.vue";
import TenderStepThreePreview from "./Step3.vue";
import TenderStepFourPreview from "./Step4.vue";
import TenderStepFivePreview from "./Step5.vue";
export default {
  components: {
    TenderStepOnePreview,
    TenderStepTwoPreview,
    TenderStepThreePreview,
    TenderStepFourPreview,
    TenderStepFivePreview,
  },
  computed: {
    ...mapState({
      fromLoading: (state) => state.fromLoading,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
