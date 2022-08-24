<template>
  <v-stepper-header class="elevation-0">
    <v-stepper-step class="font-weight-medium" :complete="step > 1" step="1">
      اطلاعات پلن
    </v-stepper-step>

    <v-divider class="d-none d-sm-block"></v-divider>

    <v-stepper-step class="font-weight-medium" :complete="step > 2" step="2">
      اطلاعات سرویس ها
    </v-stepper-step>
    <v-divider class="d-none d-sm-block"></v-divider>
    <v-stepper-step class="font-weight-medium" step="6">
      ثبت نهایی</v-stepper-step
    >
  </v-stepper-header>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      step: 1,
    };
  },
};
</script>

<style lang="scss" scoped></style>
