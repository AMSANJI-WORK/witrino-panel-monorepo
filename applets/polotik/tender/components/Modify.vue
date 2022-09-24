<template>
  <v-sheet class="transparent">
    <v-stepper
      alt-labels
      v-model="step"
      class="elevation-6 rounded-lg mx-2 d-md-block d-none"
      color="p-green-primay"
    >
      <v-stepper-title :page-title="modifyPageTitle" />
      <tender-stepper-header />
      <v-stepper-items>
        <v-stepper-content step="1">
          <TenderStepOne @stepOneComplete="setStepOneData($event)" />
        </v-stepper-content>

        <v-stepper-content step="2">
          <TenderStepTwo @stepTwoComplete="setStepTwoData($event)" />
        </v-stepper-content>
        <v-stepper-content step="3">
          <TenderStepThree @stepThreeComplete="setStepThreeData($event)" />
        </v-stepper-content>
        <v-stepper-content step="4">
          <TenderStepFour @stepFourComplete="setStepFourData($event)" />
        </v-stepper-content>
        <v-stepper-content step="5">
          <TenderStepFive @stepFiveComplete="setStepFiveData($event)" />
        </v-stepper-content>
        <v-stepper-content step="6">
          <v-card
            elevation="0"
            class="my-md-12 my-4 mx-sm-5 mx-0 px-1 px-md-auto"
          >
            <TenderPreviewContent />
          </v-card>

          <v-stepper-level-btn
            :back="5"
            :next-btn-text="submitBtnTilte"
            :next-btn-function="submit"
            :next-btn-color="submitBtnColor"
            :next-btn-loading="formLoading"
          />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-stepper v-model="step" vertical class="d-md-none d-block">
      <v-stepper-step
        color="p-green-primay"
        class="font-weight-medium"
        :complete="step > 1"
        step="1"
      >
        مشخصات
      </v-stepper-step>

      <v-stepper-content step="1">
        <TenderStepOne @stepOneComplete="setStepOneData($event)" />
      </v-stepper-content>
      <v-stepper-step
        color="#02BC77"
        class="font-weight-medium"
        :complete="step > 2"
        step="2"
      >
        شرایط
      </v-stepper-step>

      <v-stepper-content step="2">
        <TenderStepTwo @stepTwoComplete="setStepTwoData($event)" />
      </v-stepper-content>
      <v-stepper-step
        color="#02BC77"
        class="font-weight-medium"
        :complete="step > 3"
        step="3"
      >
        تقویم مناقصه</v-stepper-step
      >
      <v-stepper-content step="3">
        <TenderStepThree @stepThreeComplete="setStepThreeData($event)" />
      </v-stepper-content>
      <v-stepper-step
        color="#02BC77"
        class="font-weight-medium"
        :complete="step > 4"
        step="4"
      >
        مدارک و توضیحات</v-stepper-step
      >
      <v-stepper-content step="4">
        <TenderStepFour @stepFourComplete="setStepFourData($event)" />
      </v-stepper-content>
      <v-stepper-step
        color="#02BC77"
        class="font-weight-medium"
        :complete="step > 5"
        step="5"
      >
        فرم شرکت کننده</v-stepper-step
      >
      <v-stepper-content step="5">
        <TenderStepFive @stepFiveComplete="setStepFiveData($event)" />
      </v-stepper-content>
      <v-stepper-step color="#02BC77" class="font-weight-medium" step="6">
        ثبت نهایی</v-stepper-step
      >
      <v-stepper-content step="6">
        <v-card
          elevation="0"
          class="my-md-12 my-4 mx-sm-5 mx-0 px-1 px-md-auto"
        >
          <TenderPreviewContent />
        </v-card>

        <v-stepper-level-btn
          :back="5"
          :next-btn-text="submitBtnTilte"
          :next-btn-function="submit"
          :next-btn-color="submitBtnColor"
          :next-btn-loading="formLoading"
        />
      </v-stepper-content>
    </v-stepper>
  </v-sheet>
</template>

<script>
import TenderModifyMixin from "@applets/polotik/tender/mixins/modify";
import ServicesMixin from "@polotik/mixins/base/service";
export default {
  mixins: [TenderModifyMixin, ServicesMixin],
  created() {
    this.getAllCitiesAsync();
    this.getAllCategoriesAsync({ target: "tender" });
  },
};
</script>
<style lang="scss" scoped></style>
