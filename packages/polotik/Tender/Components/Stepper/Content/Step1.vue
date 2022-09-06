<template>
  <v-form
    lazy-validation
    ref="basicInformation"
    @submit.prevent="submit"
    class="mt-md-12 my-4 d-flex flex-wrap"
  >
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="formData.tenderCreator"
        dense
        readonly
        :loading="formLoading"
        outlined
        :rules="[rules.required]"
        label="مناقصه گذار"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="formData.tenderType"
        dense
        :loading="formLoading"
        :items="['یک مرحله ای', 'دو مرحله ای', 'ارزیابی کیفی']"
        outlined
        :rules="[rules.required]"
        label="نوع مناقصه"
      >
        <template v-slot:no-data> <v-select-input-no-data /> </template>
      </v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="formData.tenderTitle"
        dense
        :loading="formLoading"
        outlined
        :rules="[rules.required]"
        label="عنوان مناقصه"
      ></v-text-field>
    </v-col>
    <CategoryService
      sm="6"
      v-model="formData.tenderCategory"
      label="دسته بندی مناقصه"
      :multiple="true"
    />

    <CityService
      sm="6"
      v-model="formData.tenderPlace"
      label="محل برگزاری"
      :multiple="true"
    />
    <v-col cols="12" sm="6">
      <v-text-field
        dense
        :value="formData.tenderBasePrice | toRial"
        @input="(value) => (formData.tenderBasePrice = value)"
        persistent-hint
        suffix="تومان"
        :hint="formData.tenderBasePrice | numberToStringFa"
        :loading="formLoading"
        outlined
        label="برارود اولیه"
      ></v-text-field>
    </v-col>
    <v-field-space styleClass="my-sm-4 d-md-block d-none" />
    <v-stepper-level-btn
      :next="2"
      :show-back-btn="false"
      :form-refrence="$refs.basicInformation"
      @formValidated="submit"
    />
  </v-form>
</template>

<script>
import tenderLoadingMixin from "@packages/polotik/tender/mixins/loading";
import fromRules from "@commen/form/mixins/rules";
import ServicesMixin from "@polotik/mixins/base/services";
import StepperMixin from "@packages/polotik/tender/mixins/stepper";
import UtilityMixin from "@shared/mixins/utility";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";
import VFieldSpace from "@polotik/components/Reusable/VFieldSpace.vue";
import CategoryService from "@packages/polotik/service/components/Category.vue";
import CityService from "@packages/polotik/service/components/City.vue";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
import VSelectInputSelection from "@polotik/components/Reusable/VSelectInputSelection.vue";
export default {
  components: {
    CityService,
    VSelectInputNoData,
    VSelectInputSelection,
    VFieldSpace,
    VStepperLevelBtn,
    CategoryService,
  },
  mixins: [
    tenderLoadingMixin,
    fromRules,
    ServicesMixin,
    StepperMixin,
    UtilityMixin,
  ],
  data: () => ({
    formData: {
      tenderCategory: [],
      tenderBasePrice: null,
      tenderPlace: null,
      tenderTitle: null,
      tenderCreator: "رونيا مارکت",
      tenderType: null,
    },
  }),
  methods: {
    setData() {
      const {
        title,
        data: {
          category,
          tenderInfo: { basePrice, place, type, user },
        },
      } = this.dataSource;
      this.formData.tenderBasePrice = basePrice;
      this.formData.tenderTitle = title;
      this.formData.tenderCategory = category;
      this.formData.tenderPlace = place;
      this.formData.tenderCreator = user?.name;
      this.formData.tenderType = type;
    },

    submit() {
      this.$emit("stepOneComplete", this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
