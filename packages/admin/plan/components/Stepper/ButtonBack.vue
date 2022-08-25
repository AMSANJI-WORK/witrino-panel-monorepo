<template>
  <v-btn
    class="grey white--text mx-2"
    rounded
    small
    @click="changeStep(prevStep)"
  >
    <span class="px-4 d-md-block d-none">مرحله قبل</span>
    <span class="d-block d-md-none">قبل</span>
    <v-icon class="mx-1 d-block d-md-none" small>mdi-arrow-right</v-icon>
  </v-btn>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters } = createNamespacedHelpers("shared/stepper");
export default {
  computed: {
    ...mapGetters(["step"]),
    prevStep() {
      return this.step - 1;
    },
  },
  methods: {
    ...mapMutations({
      changeStep: "CHANGE_STEP",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
