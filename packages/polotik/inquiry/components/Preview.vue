<template>
  <v-card
    elevation="6"
    :loading="formLoading"
    class="d-flex flex-row flex-wrap rounded-lg mx-2 pa-10"
  >
    <carousel
      class="d-block d-md-none"
      :gallery="editableInquiry.data?.gallery"
    />

    <v-col cols="12" md="6" class="d-flex flex-wrap">
      <v-col cols="12" class="py-0">
        <v-label label="عنوان" :label-value="editableInquiry.title" />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-label
          label="مقدار"
          :label-value="`${editableInquiry.data.amount} ${editableInquiry.data?.unit?.name}`"
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-label label="دسته بندی" />
        <v-chip
          x-small
          v-for="(category, index) in editableInquiry.data.category"
          :key="index"
          >{{ category?.name }}</v-chip
        >
      </v-col>
      <v-col cols="12" class="py-0">
        <v-label label="تاریخ شروع" :label-value="fromDate" />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-label
          label="مکان تحویل"
          :label-value="editableInquiry.data.place | selectedCity"
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-label
          label="مدت اعتبار (از تاریخ شروع)"
          :label-value="`${remainingDays} روز`"
        />
      </v-col>
    </v-col>
    <carousel
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
    <ParticipateForm
      v-if="
        currentUserId != editableInquiry.user_id &&
        editableInquiry?.user_offer?.length == 0
      "
    />
    <v-col
      cols="12"
      class="d-flex"
      v-if="
        currentUserId != editableInquiry.user_id &&
        editableInquiry?.user_offer?.length >= 1
      "
    >
      <v-spacer></v-spacer>
      <v-btn color="success" @click="$router.push('outcome')"
        >پیگیری پیشنهاد من</v-btn
      >
    </v-col>
  </v-card>
</template>

<script>
import inquiryLoadingMixin from "@packages/polotik/inquiry/mixins/loading";
import UtilityMixin from "@shared/mixins/utility";
import InquiryMixin from "@packages/polotik/inquiry/mixins/index";
import VLabel from "@commen/label/components/Label.vue";
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
  filters: {
    selectedCity(value) {
      return value;
    },
  },
  computed: {
    ...mapGetters("guilds/services/cities", ["cities"]),
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
    getInquiryData() {
      this.getAnInquiryAsync(this.inquiryId).then(() => {
        Object.assign(this.editableInquiry, this.inquiry);
        this.fromDate = this.calculateFromDate;
      });
    },
  },
  created() {
    this.getInquiryData();
  },
};
</script>
<style lang="scss" scoped></style>
