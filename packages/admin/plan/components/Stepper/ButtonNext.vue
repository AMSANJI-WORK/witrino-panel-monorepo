<template>
  <v-btn rounded small color="primary" @click="validateStep">
    <span class="px-4 d-md-block d-none">مرحله بعد</span>
    <span class="d-block d-md-none">بعد</span>
    <v-icon class="mx-1 d-block d-md-none" small>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters } = createNamespacedHelpers("shared/stepper");
export default {
  props: {
    isValid: Function,
    submit: Function,
  },
  computed: {
    ...mapGetters(["step"]),
    nextStep() {
      return this.step + 1;
    },
  },
  methods: {
    ...mapMutations({
      changeStep: "CHANGE_STEP",
      resetStep: "RESET_STEP",
    }),
    validateStep() {
      if (this.isValid()) {
        this.submit();
        this.changeStep(this.nextStep);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
