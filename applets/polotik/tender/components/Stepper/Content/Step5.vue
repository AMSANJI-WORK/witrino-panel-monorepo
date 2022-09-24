<template>
  <v-form
    @submit.prevent="submit"
    ref="settings-form"
    class="mb-4 d-flex flex-wrap"
  >
    <v-col cols="12">
      <v-checkbox
        dense
        hide-details
        v-model="formData.participation"
        label="نمایش فرم دریافت اطلاعات"
        color="primary"
      ></v-checkbox>
    </v-col>
    <v-expand-transition>
      <v-col cols="12" v-if="formData.participation">
        <v-divider class="mb-4"></v-divider>
        <v-row no-gutters class="flex-wrap">
          <v-col cols="12" sm="6" md="4">
            <v-checkbox
              dense
              v-model="formData.offerPrice"
              label="امکان درج مبلغ پیشنهادی"
              color="primary"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-checkbox
              dense
              v-model="formData.uploadable"
              label="امکان بارگذاری مدارک"
              color="primary"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-checkbox
              dense
              v-model="formData.commentable"
              label="امکان ثبت نظر"
              color="primary"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-textarea
          outlined
          label="توضیحات"
          placeholder="این فرم در اختیار شرکت کنندگان قرار میگیرد"
          :loading="formLoading"
          v-model="formData.participateFormDescription"
        ></v-textarea>
      </v-col>
    </v-expand-transition>
    <v-field-space styleClass="my-sm-4 d-md-block d-none" />
    <v-stepper-level-btn
      :next="6"
      :back="4"
      :form-refrence="$refs['settings-form']"
      @formValidated="submit"
    />
  </v-form>
</template>

<script>
import tenderLoadingMixin from "@applets/polotik/tender/mixins/loading";
import fromRules from "@commen/form/mixins/rules";
import StepperMixin from "@applets/polotik/tender/mixins/stepper";
import VFieldSpace from "@polotik/components/Reusable/VFieldSpace.vue";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";
export default {
  components: {
    VFieldSpace,
    VStepperLevelBtn,
  },
  mixins: [tenderLoadingMixin, fromRules, StepperMixin],
  data: () => ({
    formData: {
      uploadable: false,
      commentable: false,
      participation: false,
      offerPrice: false,
      participateFormDescription: null,
    },
  }),
  watch: {
    "formData.participation": function (newValue) {
      if (!newValue) {
        this.formData.offerPrice = false;
        this.formData.uploadable = false;
        this.formData.commentable = false;
        this.formData.participateFormDescription = null;
      }
    },
  },
  methods: {
    setData() {
      const {
        data: {
          tenderInfo: { settings },
        },
      } = this.dataSource;
      this.formData.uploadable = settings.uploadable;
      this.formData.commentable = settings.commentable;
      this.formData.participation = settings.participation;
      this.formData.offerPrice = settings.offerPrice;
      this.formData.participateFormDescription = settings.description;
    },
    submit() {
      this.$emit("stepFiveComplete", this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
