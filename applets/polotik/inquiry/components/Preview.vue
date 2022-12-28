<template>
  <v-card
    elevation="6"
    :loading="formLoading"
    class="d-flex flex-row flex-wrap rounded-lg mx-2 pa-md-10"
  >
    <Carousel
      class="d-block d-md-none"
      :gallery="editableInquiry.data?.gallery"
    />

    <v-col cols="12" md="6">
      <v-sheet class="transparent d-flex flex-wrap">
        <v-col cols="12">
          <VLabel label="عنوان" :label-value="editableInquiry.title" />
        </v-col>
        <v-col cols="12">
          <VLabel
            label="مقدار"
            :label-value="`${editableInquiry.data.amount} ${editableInquiry.data?.unit?.name}`"
          />
        </v-col>
        <v-col cols="12">
          <VLabel label="دسته بندی" />
          <v-chip
            x-small
            v-for="(category, index) in editableInquiry.data.category"
            :key="index"
            >{{ category?.name }}</v-chip
          >
        </v-col>
        <v-col cols="12">
          <VLabel label="تاریخ شروع" :label-value="fromDate" />
        </v-col>
        <v-col cols="12">
          <VLabel
            label="مکان تحویل"
            :label-value="getCityNameProperty(editableInquiry.data.place)"
          />
        </v-col>
        <v-col cols="12">
          <VLabel
            label="مدت اعتبار (از تاریخ شروع)"
            :label-value="`${remainingDays} روز`"
          />
        </v-col>
      </v-sheet>
    </v-col>
    <Carousel
      class="d-md-block d-none"
      :gallery="editableInquiry.data?.gallery"
    />

    <v-col cols="12" class="py-0">
      <v-card class="transparent" elevation="0">
        <v-card-title class="pt-0 pr-3 text--secondary"> توضیحات </v-card-title>
        <v-card-text class="pr-3">
          {{ editableInquiry.description }}
        </v-card-text>
      </v-card>
    </v-col>
    <!--  -->
    <ParticipateForm v-if="showParticipateForm" />
    <v-col cols="12" class="d-flex" v-if="showOfferButton">
      <v-spacer></v-spacer>
      <v-btn color="success" @click="$router.push('request')"
        >دیدن پیشنهادات</v-btn
      >
    </v-col>
    <v-col cols="12" class="d-flex" v-if="showOfferUserButton">
      <v-spacer></v-spacer>
      <v-btn color="success" @click="$router.push('outcome')"
        >پیگیری پیشنهاد من</v-btn
      >
    </v-col>
  </v-card>
</template>

<script>
import inquiryLoadingMixin from "@applets/polotik/inquiry/mixins/loading";
import UtilityMixin from "@applets/commen/mixins/utility.js";
import InquiryMixin from "@applets/polotik/inquiry/mixins/index";
import VLabel from "@applets/commen/label/components/Label.vue";
import Carousel from "@polotik/components/Reusable/Carousel.vue";
import ParticipateForm from "./ParticipateForm.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ParticipateForm,
    Carousel,
    VLabel,
  },
  mixins: [InquiryMixin, inquiryLoadingMixin, UtilityMixin],
  computed: {
    ...mapGetters("service/cities", ["cities"]),
    showOfferUserButton() {
      return (
        this.currentUserId != this.editableInquiry.user_id &&
        this.editableInquiry.user_offer.length != 0
      );
    },
    showOfferButton() {
      return (
        this.currentUserId == this.editableInquiry.user_id &&
        this.editableInquiry.offers.data.length != 0
      );
    },
    showParticipateForm() {
      return (
        this.currentUserId != this.editableInquiry.user_id &&
        !this.editableInquiry.user_offer.length != 0
      );
    },
    compareStartDateWithCurrentDate() {
      const oneDay = 1000 * 60 * 60 * 24;
      const startDateDefrenceWithCurrentDate =
        new Date(this.editableInquiry.start) - new Date(Date.now());

      const defrencePerDay = Math.ceil(
        startDateDefrenceWithCurrentDate / oneDay
      );
      if (defrencePerDay <= 0) return new Date(Date.now());
      return new Date(this.editableInquiry.start);
    },
    remainingDays() {
      const timeDefrence = Math.abs(
        this.compareStartDateWithCurrentDate -
          new Date(this.editableInquiry.end)
      );
      const oneDay = 1000 * 60 * 60 * 24;
      return Math.ceil(timeDefrence / oneDay);
    },
  },
  methods: {
    getCityNameProperty(selectedCity) {
      let cityFind = this.cities.find((city) => city.id == selectedCity);
      return cityFind?.name;
    },
    getInquiryData() {
      this.getAnInquiryAsync(this.inquiryId).then(() => {
        console.log(this.item);
        this.editableInquiry = Object.assign({}, this.item);
        this.fromDate = this.calculateFromDate;
      });
    },
  },
  created() {
    if (this.cities.length == 0)
      this.$store.dispatch("service/cities/GET_ALL_CITIES_ASYNC");
    this.getInquiryData();
  },
};
</script>
<style lang="scss" scoped></style>
