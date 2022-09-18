<template>
  <div class="d-flex flex-row flex-wrap" style="width: 100">
    <v-col cols="12" sm="6" class="py-0">
      <VLabel
        label="مزایده گذار"
        :label-value="auction.data.auctionInfo.user.name"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel
        label="نوع مزایده"
        :label-value="auction.data.auctionInfo.type"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel label="عنوان مزایده" :label-value="auction.title" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel label="دسته مزایده" />
      <v-chip
        x-small
        v-for="(category, index) in auction.data.category"
        :key="index"
        >{{ getCategoryNameProperty(category) }}</v-chip
      >
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel
        label="محل برگزاری"
        :label-value="getCityNameProperty(auction.data.auctionInfo.place)"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel
        label="برارود اولیه"
        :label-value="auction.data.auctionInfo.basePrice | numberToStringFa"
      />
    </v-col>
    <v-col cols="12">
      <div
        v-if="!routeIsPreview"
        class="d-flex flex-row-reverse"
        style="width: 100%"
      >
        <v-btn
          class="white--text font-weight-bold justify-end"
          x-small
          rounded
          color="yellow darken-4"
          @click="changeStep(1)"
          >ویرایش</v-btn
        >
      </div>
      <v-divider class="my-4"></v-divider>
    </v-col>
  </div>
</template>

<script>
import UtilityMixin from "@shared/mixins/utility";
import { mapGetters, mapMutations } from "vuex";
import VLabel from "@commen/label/components/Label.vue";
export default {
  mixins: [UtilityMixin],
  components: { VLabel },
  computed: {
    ...mapGetters("auction", ["auction"]),
    ...mapGetters("service/category", ["categories"]),
    ...mapGetters("service/cities", ["cities"]),
    routeIsPreview() {
      return this.$route.path.includes("preview");
    },
  },
  methods: {
    ...mapMutations("auction", { changeStep: "CHANGE_STEP" }),
    getCategoryNameProperty(selectedCategory) {
      if (!selectedCategory?.name) {
        let findCategory = this.categories.find(
          (category) => category.id == selectedCategory
        );
        return findCategory.name;
      }
      return selectedCategory.name;
    },
    getCityNameProperty(selectedCity) {
      let cityFind = this.cities.find((city) => city.id == selectedCity);
      return cityFind?.name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
