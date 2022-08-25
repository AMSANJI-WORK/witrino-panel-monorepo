<template>
  <div class="d-flex flex-row flex-wrap" style="width: 100">
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        label="مناقصه گذار"
        :label-value="tender.data.tenderInfo.user.name"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label label="نوع مناقصه" :label-value="tender.data.tenderInfo.type" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label label="عنوان مناقصه" :label-value="tender.title" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label label="دسته مناقصه" />
      <v-chip
        x-small
        v-for="(category, index) in tender.data.category"
        :key="index"
        >{{ category.name }}</v-chip
      >
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        label="محل برگزاری"
        :label-value="tender.data.tenderInfo.place"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label
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
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters } = createNamespacedHelpers("guilds/tender");
import VLabel from "@polotik/components/Reusable/VLabel.vue";
import UtilityMixin from "@shared/mixins/utility";

export default {
  mixins: [UtilityMixin],
  components: { VLabel },
  computed: {
    ...mapGetters(["tender"]),
    routeIsPreview() {
      return this.$route.path.includes("preview");
    },
  },
  methods: {
    ...mapMutations({ changeStep: "CHANGE_STEP" }),
  },
};
</script>

<style lang="scss" scoped></style>
