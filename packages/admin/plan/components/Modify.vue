<template>
  <v-sheet class="transparent">
    <v-stepper
      alt-labels
      v-model="step"
      class="elevation-6 rounded-lg mx-2 d-md-block d-none"
      color="#187968"
    >
      <StepperHeader />

      <v-stepper-items>
        <v-stepper-content step="1"> </v-stepper-content>
        <v-stepper-content step="2"> </v-stepper-content>
        <v-stepper-content step="3"> </v-stepper-content>
        <v-stepper-content step="4"> </v-stepper-content>
        <v-stepper-content step="5"> </v-stepper-content>
        <v-stepper-content step="6">
          <v-card
            elevation="0"
            class="my-md-12 my-4 mx-sm-5 mx-0 px-1 px-md-auto"
          >
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-stepper v-model="step" vertical class="d-block d-md-none">
      <v-stepper-step class="font-weight-medium" :complete="step > 1" step="1">
        مشخصات
      </v-stepper-step>

      <v-stepper-content step="1"> </v-stepper-content>
      <v-stepper-step class="font-weight-medium" :complete="step > 2" step="2">
        شرایط
      </v-stepper-step>

      <v-stepper-content step="2"> </v-stepper-content>
      <v-stepper-step class="font-weight-medium" :complete="step > 3" step="3">
        تقویم مزایده</v-stepper-step
      >
      <v-stepper-content step="3"> </v-stepper-content>
      <v-stepper-step class="font-weight-medium" :complete="step > 4" step="4">
        مدارک و توضیحات</v-stepper-step
      >
      <v-stepper-content step="4"> </v-stepper-content>
      <v-stepper-step class="font-weight-medium" :complete="step > 5" step="5">
        فرم شرکت کننده</v-stepper-step
      >
      <v-stepper-content step="5"> </v-stepper-content>
      <v-stepper-step class="font-weight-medium" step="6">
        ثبت نهایی</v-stepper-step
      >
      <v-stepper-content step="6">
        <v-card
          elevation="0"
          class="my-md-12 my-4 mx-sm-5 mx-0 px-1 px-md-auto"
        >
        </v-card>
      </v-stepper-content>
    </v-stepper>
  </v-sheet>
</template>

<script>
import StepperHeader from "./Stepper/Header.vue";
export default {
  components: {
    StepperHeader,
  },
  data() {
    return {
      step: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 900px) {
  .v-stepper__content {
    top: 0;
    padding: 0px 24px 16px;
    flex: 1 0 auto;
    width: 100%;
  }
}
@media only screen and (max-width: 900px) {
  .v-stepper__content {
    top: 0;
    padding: 0px 10px 5px;
    flex: 1 0 auto;
    width: 100%;
  }
}

.v-text-field--outlined > .v-input__control > .v-input__slot {
  background: #fff;
  border-radius: 8px;
}
.v-stepper--alt-labels .v-stepper__header {
  height: auto;
}
</style>
