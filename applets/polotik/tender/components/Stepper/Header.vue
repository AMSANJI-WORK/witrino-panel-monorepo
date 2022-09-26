<template>
  <v-stepper-header class="elevation-0">
    <v-stepper-step
      color="#02BC77"
      class="font-weight-medium"
      :complete="step > 1"
      step="1"
    >
      مشخصات
    </v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step
      color="#02BC77"
      class="font-weight-medium"
      :complete="step > 2"
      step="2"
    >
      شرایط
    </v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step
      color="#02BC77"
      class="font-weight-medium"
      :complete="step > 3"
      step="3"
    >
      تقویم مناقصه</v-stepper-step
    >
    <v-divider></v-divider>

    <v-stepper-step
      color="#02BC77"
      class="font-weight-medium"
      :complete="step > 4"
      step="4"
    >
      مدارک و توضیحات</v-stepper-step
    >
    <v-divider></v-divider>

    <v-stepper-step
      color="#02BC77"
      class="font-weight-medium"
      :complete="step > 5"
      step="5"
    >
      فرم شرکت کننده</v-stepper-step
    >
    <v-divider></v-divider>
    <v-stepper-step color="#02BC77" class="font-weight-medium" step="6">
      ثبت نهایی</v-stepper-step
    >
  </v-stepper-header>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
};
</script>
