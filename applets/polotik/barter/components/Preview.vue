<template>
  <v-form ref="barter">
    <v-card
      elevation="6"
      :loading="formLoading"
      class="d-flex flex-row flex-wrap rounded-lg mx-2 py-5 pt-3"
    >
      <carousel
        class="d-block d-md-none"
        :gallery="editableBarter.data?.gallery"
      />
      <v-col cols="12" md="6" class="d-flex flex-wrap">
        <v-col cols="12" class="py-0">
          <VLabel label="عنوان" :label-value="editableBarter.title" />
        </v-col>
        <v-col cols="12" class="py-0">
          <VLabel label="تاریخ شروع" :label-value="fromDate" />
        </v-col>
        <v-col cols="12" class="py-0">
          <VLabel
            label="مکان تحویل"
            :label-value="getCityNameProperty(editableBarter.data.place)"
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <VLabel
            label="ارزش تقریبی"
            :label-value="editableBarter.data.price | numberToStringFa"
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <VLabel label="محصول / خدمت قابل ارائه" />
          <v-chip
            x-small
            v-for="(category, index) in serviceAvailable"
            :key="index"
            >{{ category?.name }}</v-chip
          >
        </v-col>
        <v-col cols="12" class="py-0">
          <VLabel label="محصول / خدمت درخواستی" />
          <v-chip
            x-small
            v-for="(category, index) in serviceRequested"
            :key="index"
            >{{ category?.name }}</v-chip
          >
        </v-col>
        <v-col cols="12" class="py-0">
          <VLabel
            label="مدت اعتبار (از تاریخ شروع)"
            :label-value="`${remainingDays} روز`"
          />
        </v-col>
      </v-col>
      <carousel
        class="d-md-block d-none"
        :gallery="editableBarter.data?.gallery"
      />
      <v-col cols="12" class="py-0">
        <v-card class="transparent" elevation="0">
          <v-card-title class="pt-0 pr-3 text--secondary">
            توضیحات
          </v-card-title>
          <v-card-text class="pr-3">
            {{ editableBarter.description }}
          </v-card-text>
        </v-card>
      </v-col>
      <ParticipateForm
        v-if="
          currentUserId != editableBarter.user_id && editableBarter?.user_offer
        "
      />
      <v-col cols="12" class="d-flex">
        <v-spacer></v-spacer>
        <v-btn
          v-if="editableBarter?.user_offer"
          color="success"
          @click="$router.push('outcome')"
          >پیگیری پیشنهاد من</v-btn
        >
        <v-btn
          v-if="editableBarter?.offers"
          color="success"
          @click="$router.push('request')"
          >دیدن پیشنهادات</v-btn
        >
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UtilityMixin from "@applets/commen/mixins/utility.js";
import barterLoadingMixin from "@applets/polotik/barter/mixins/loading";
import BarterMixin from "@applets/polotik/barter/mixins";
import ParticipateForm from "./ParticipateForm.vue";
import VLabel from "@applets/commen/label/components/Label.vue";
import Carousel from "@polotik/components/Reusable/Carousel.vue";
import serviceTypes from "@applets/polotik/service/store/types";
export default {
  components: {
    VLabel,
    Carousel,
    ParticipateForm,
  },
  mixins: [BarterMixin, barterLoadingMixin, UtilityMixin],

  computed: {
    ...mapGetters("service/category", ["categories"]),
    ...mapGetters("service/cities", ["cities"]),

    compareStartDateWithCurrentDate() {
      const oneDay = 1000 * 60 * 60 * 24;
      const startDateDefrenceWithCurrentDate =
        new Date(this.editableBarter.start) - new Date(Date.now());

      const defrencePerDay = Math.ceil(
        startDateDefrenceWithCurrentDate / oneDay
      );
      if (defrencePerDay <= 0) return new Date(Date.now());
      return new Date(this.editableBarter.start);
    },
    serviceAvailable() {
      return this.editableBarter.data.service.available.map((el) => {
        return this.categories.find((category) => category.id === el);
      });
    },
    serviceRequested() {
      return this.editableBarter.data.service.requested.map((el) => {
        return this.categories.find((category) => category.id === el);
      });
    },
    remainingDays() {
      const timeDefrence = Math.abs(
        this.compareStartDateWithCurrentDate - new Date(this.editableBarter.end)
      );
      const oneDay = 1000 * 60 * 60 * 24;
      return Math.ceil(timeDefrence / oneDay);
    },
  },
  methods: {
    ...mapActions("service/category", {
      getAllCategoriesAsync: `${serviceTypes.GET_ALL_CATEGORIES_ASYNC}`,
    }),
    getCityNameProperty(selectedCity) {
      let cityFind = this.cities.find((city) => city.id == selectedCity);
      return cityFind?.name;
    },
    getBarterData() {
      this.getAllCategoriesAsync({ target: "barter" });
      this.getABarterAsync(this.barterId).then(() => {
        Object.assign(this.editableBarter, this.item);
        this.fromDate = this.calculateFromDate;
      });
    },
  },
  created() {
    if (this.cities.length == 0)
      this.$store.dispatch("service/cities/GET_ALL_CITIES_ASYNC");
    this.getBarterData();
  },
};
</script>
<style lang="scss" scoped></style>
