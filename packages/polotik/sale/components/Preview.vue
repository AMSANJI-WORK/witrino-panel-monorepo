<template>
  <v-card
    elevation="6"
    :loading="formLoading"
    class="d-flex flex-row flex-wrap rounded-lg mx-2 mx-2 pa-md-10"
  >
    <carousel class="d-block d-md-none" :gallery="sale.data?.gallery" />
    <v-col cols="12" md="6" class="d-flex flex-wrap">
      <v-col cols="12" class="py-0">
        <VLabel label="عنوان" :label-value="sale.title" />
      </v-col>
      <v-col cols="12" class="py-0">
        <VLabel label="دسته بندی" />
        <v-chip
          x-small
          v-for="(category, index) in sale.data.category"
          :key="index"
          >{{ category.name }}</v-chip
        >
      </v-col>
      <v-col cols="12" class="py-0">
        <VLabel
          label="مقدار"
          :label-value="`${unitAmountToFa} ${sale.data.unit?.name}`"
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <VLabel label="تاریخ شروع" :label-value="sale.start | dateToFa" />
      </v-col>
      <v-col cols="12" class="py-0">
        <VLabel label="تاریخ پایان" :label-value="sale.end | dateToFa" />
      </v-col>
      <v-col cols="12" class="py-0">
        <VLabel
          label="مکان تحویل"
          :label-value="getCityNameProperty(sale.data.place)"
        />
      </v-col>
    </v-col>
    <carousel class="d-md-block d-none" :gallery="sale.data?.gallery" />
    <v-col cols="12" class="py-0">
      <v-card class="transparent" elevation="0">
        <v-card-title class="pt-0 pr-3 text--secondary"> توضیحات </v-card-title>
        <v-card-text class="pr-3">
          {{ sale.description }}
        </v-card-text>
      </v-card>
    </v-col>
    <!-- <v-btn
      v-if="currentUserId != editableSale.user_id"
      color="red"
      dark
      link
      to="request"
      class="mr-auto"
      >شرکت در حراجی</v-btn
    > -->
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import saleLoadingMixin from "@packages/polotik/sale/mixins/loading";
import UtilityMixin from "@shared/mixins/utility";
import VLabel from "@commen/label/components/Label.vue";
import Carousel from "@polotik/components/Reusable/Carousel.vue";
import moment from "moment-jalaali";

export default {
  components: {
    Carousel,
    VLabel,
  },
  mixins: [saleLoadingMixin, UtilityMixin],
  filters: {
    dateToFa(v) {
      return moment(v).format("HH:mm | jYYYY/jMM/jDD");
    },
  },
  computed: {
    ...mapGetters("guilds/services/cities", ["cities"]),
    sale() {
      return this.$store.getters["guilds/sale/sale"];
    },
    unitAmountToFa() {
      return this.sale?.data.amount
        ? this.sale?.data.amount.num2persian()
        : "0";
    },
  },
  methods: {
    getCityNameProperty(selectedCity) {
      let cityFind = this.cities.find((city) => city.id == selectedCity);
      return cityFind?.name;
    },
  },
  created() {
    this.$store.dispatch("guilds/sale/GET_A_SALE_ASYNC", this.$route.params.id);
  },
};
</script>
<style lang="scss" scoped>
:deep(.v-slider--horizontal .v-slider__track-container) {
  width: 100%;
  height: 7px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
