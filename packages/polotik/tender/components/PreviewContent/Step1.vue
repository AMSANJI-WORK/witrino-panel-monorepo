<template>
  <div class="d-flex flex-row flex-wrap" style="width: 100">
    <v-col cols="12" sm="6" class="py-0">
      <VLabel
        label="مناقصه گذار"
        :label-value="tender.data.tenderInfo.user.name"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel label="نوع مناقصه" :label-value="tender.data.tenderInfo.type" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel label="عنوان مناقصه" :label-value="tender.title" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel label="دسته مناقصه" />
      <v-chip
        x-small
        v-for="(category, index) in tender.data.category"
        :key="index"
        >{{ getCategoryNameProperty(category) }}</v-chip
      >
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel
        label="محل برگزاری"
        :label-value="getCityNameProperty(tender.data.tenderInfo.place)"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel
        label="برارود اولیه"
        :label-value="tender.data.tenderInfo.basePrice | numberToStringFa"
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
import { mapGetters, mapMutations } from "vuex";
import VLabel from "@commen/label/components/Label.vue";
import UtilityMixin from "@shared/mixins/utility";

export default {
  mixins: [UtilityMixin],
  components: { VLabel },
  computed: {
    ...mapGetters("guilds/tender", ["tender"]),
    ...mapGetters("guilds/services/category", ["categories"]),
    ...mapGetters("guilds/services/cities", ["cities"]),
    routeIsPreview() {
      return this.$route.path.includes("preview");
    },
  },
  methods: {
    ...mapMutations("guilds/tender", { changeStep: "CHANGE_STEP" }),
    getCityNameProperty(selectedCity) {
      let cityFind = this.cities.find((city) => city.id == selectedCity);
      return cityFind?.name;
    },
    getCategoryNameProperty(selectedCategory) {
      if (!selectedCategory?.name) {
        let findCategory = this.categories.find(
          (category) => category.id == selectedCategory
        );
        return findCategory.name;
      }
      return selectedCategory.name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
