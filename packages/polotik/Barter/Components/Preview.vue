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
          <v-label label="عنوان" :label-value="editableBarter.title" />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-label label="تاریخ شروع" :label-value="fromDate" />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-label
            label="مکان تحویل"
            :label-value="editableBarter.data.place"
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-label
            label="ارزش تقریبی"
            :label-value="editableBarter.data.price | numberToStringFa"
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-label label="محصول / خدمت قابل ارائه" />
          <v-chip
            x-small
            v-for="(category, index) in serviceAvailable"
            :key="index"
            >{{ category?.name }}</v-chip
          >
        </v-col>
        <v-col cols="12" class="py-0">
          <v-label label="محصول / خدمت درخواستی" />
          <v-chip
            x-small
            v-for="(category, index) in serviceRequested"
            :key="index"
            >{{ category?.name }}</v-chip
          >
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
          currentUserId != editableBarter.user_id &&
          editableBarter?.user_offer?.length == 0
        "
      />
      <v-col
        cols="12"
        class="d-flex"
        v-if="
          currentUserId != editableBarter.user_id &&
          editableBarter?.user_offer?.length >= 1
        "
      >
        <v-spacer></v-spacer>
        <v-btn color="success" @click="$router.push('outcome')"
          >پیگیری پیشنهاد من</v-btn
        >
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UtilityMixin from "@shared/mixins/utility";
import FormMixin from "@polotik/mixins/base/form";
import BarterMixin from "@packages/polotik/barter/mixins";
import ParticipateForm from "./ParticipateForm.vue";
import VLabel from "@commen/label/components/Label.vue";
import Carousel from "@polotik/components/Reusable/Carousel.vue";
import servicesTypes from "@packages/polotik/Service/store/types";
export default {
  components: {
    VLabel,
    Carousel,
    ParticipateForm,
  },
  mixins: [BarterMixin, FormMixin, UtilityMixin],

  computed: {
    ...mapGetters("guilds/services/category", ["categories"]),
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
    ...mapActions("guilds/services/category", {
      getAllCategoriesAsync: `${servicesTypes.GET_ALL_CATEGORIES_ASYNC}`,
    }),
    getBarterData() {
      this.getAllCategoriesAsync({ target: "barter" });
      this.getABarterAsync(this.barterId).then(() => {
        Object.assign(this.editableBarter, this.barter);
        this.fromDate = this.calculateFromDate;
      });
    },
  },
  created() {
    this.getBarterData();
  },
};
</script>
<style lang="scss" scoped></style>
