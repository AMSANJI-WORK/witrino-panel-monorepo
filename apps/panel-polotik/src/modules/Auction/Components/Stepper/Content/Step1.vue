<template>
  <v-form
    lazy-validation
    ref="basicInformation"
    @submit.prevent="submit"
    class="mt-md-12 my-4 d-flex flex-wrap"
  >
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="formData.auctionCreator"
        dense
        readonly
        :loading="fromLoading"
        outlined
        :rules="[rules.required]"
        label="مزایده گذار"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="formData.auctionType"
        dense
        :loading="fromLoading"
        :items="['یک مرحله ای', 'دو مرحله ای', 'ارزیابی کیفی']"
        outlined
        :rules="[rules.required]"
        label="نوع مزایده"
      >
        <template v-slot:no-data> <v-select-input-no-data /> </template>
      </v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="formData.auctionTitle"
        dense
        :loading="fromLoading"
        outlined
        :rules="[rules.required]"
        label="عنوان مزایده"
      ></v-text-field>
    </v-col>
    <CategoryService
      sm="6"
      label="دسته بندی مزایده"
      v-model="formData.auctionCategory"
      :multiple="true"
    />

    <CityService
      sm="6"
      v-model="formData.auctionPlace"
      label="محل برگزاری"
      :multiple="true"
    />
    <v-col cols="12" sm="6">
      <v-text-field
        dense
        label="برارود اولیه"
        suffix="تومان"
        persistent-hint
        :value="formData.auctionBasePrice | toRial"
        @input="(value) => (formData.auctionBasePrice = value)"
        :hint="formData.auctionBasePrice | numberToStringFa"
        :loading="fromLoading"
        outlined
      ></v-text-field>
    </v-col>
    <v-field-space />
    <v-stepper-level-btn
      :next="2"
      :show-back-btn="false"
      :form-refrence="$refs.basicInformation"
      @formValidated="submit"
    />
  </v-form>
</template>

<script>
import FormMixin from "@polotik/mixins/base/form";
import UtilityMixin from "@polotik/mixins/utility";
import ServicesMixin from "@polotik/mixins/base/services";
import StepperMixin from "@polotik/modules/Auction/Mixins/stepper";
import VFieldSpace from "@polotik/components/Reusable/VFieldSpace.vue";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
import VSelectInputSelection from "@polotik/components/Reusable/VSelectInputSelection.vue";
import CategoryService from "@polotik/modules/Service/components/Category.vue";
import CityService from "@polotik/modules/Service/components/City.vue";

export default {
  components: {
    CityService,
    VFieldSpace,
    VStepperLevelBtn,
    CategoryService,
    VSelectInputNoData,
    VSelectInputSelection,
  },
  mixins: [FormMixin, ServicesMixin, StepperMixin, UtilityMixin],
  data: () => ({
    formData: {
      auctionBasePrice: null,
      auctionPlace: null,
      auctionCategory: [],
      auctionTitle: null,
      auctionCreator: "رونيا مارکت",
      auctionType: null,
    },
  }),
  methods: {
    setData() {
      const {
        title,
        data: {
          category,
          auctionInfo: { basePrice, place, type, user },
        },
      } = this.dataSource;
      this.formData.auctionBasePrice = basePrice;
      this.formData.auctionTitle = title;
      this.formData.auctionCategory = category;
      this.formData.auctionPlace = place;
      this.formData.auctionCreator = user?.name;
      this.formData.auctionType = type;
    },

    submit() {
      this.$emit("stepOneComplete", this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
