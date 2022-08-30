<template>
  <v-card
    elevation="6"
    :loading="fromLoading"
    class="d-flex flex-row flex-wrap rounded-lg mx-2 mx-2 pa-10"
  >
    <carousel class="d-block d-md-none" :gallery="editableSale.data?.gallery" />
    <v-col cols="12" md="6" class="d-flex flex-wrap">
      <v-col cols="12" class="py-0">
        <v-label label="عنوان" :label-value="editableSale.title" />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-label label="دسته بندی" />
        <v-chip
          x-small
          v-for="(category, index) in editableSale.data.category"
          :key="index"
          >{{ category.name }}</v-chip
        >
      </v-col>
      <v-col cols="12" class="py-0">
        <v-label
          label="مقدار"
          :label-value="`${unitAmountToFa} ${editableSale.data.unit?.name}`"
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-label label="تاریخ شروع" :label-value="fromDate" />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-label label="تاریخ پایان" :label-value="endDate" />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-label label="مکان تحویل" :label-value="editableSale.data.place" />
      </v-col>
    </v-col>
    <carousel class="d-md-block d-none" :gallery="editableSale.data?.gallery" />
    <v-col cols="12" class="py-0">
      <v-card class="transparent" elevation="0">
        <v-card-title class="pt-0 pr-3 text--secondary"> توضیحات </v-card-title>
        <v-card-text class="pr-3">
          {{ editableSale.description }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-btn
      v-if="currentUserId != editableSale.user_id"
      color="red"
      dark
      link
      to="request"
      class="mr-auto"
      >شرکت در حراجی</v-btn
    >
  </v-card>
</template>

<script>
import FormMixin from "@polotik/mixins/base/form";
import SaleMixin from "@packages/polotik/sale/Mixins";
import UtilityMixin from "@shared/mixins/utility";
import VLabel from "@polotik/components/Reusable/VLabel.vue";
import Carousel from "@polotik/components/Reusable/Carousel.vue";
export default {
  components: {
    Carousel,
    VLabel,
  },
  mixins: [SaleMixin, FormMixin, UtilityMixin],
  computed: {
    unitAmountToFa() {
      return this.editableSale.data.amount
        ? this.editableSale.data.amount.num2persian()
        : "0";
    },
  },
  methods: {
    getSaleData() {
      this.getASaleAsync(this.saleId).then(() => {
        Object.assign(this.editableSale, this.sale);
        this.fromDate = this.calculateFromDate;
        this.endDate = this.calculateEndDate;
      });
    },
  },
  created() {
    this.getSaleData();
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
