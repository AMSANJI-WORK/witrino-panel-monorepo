<template>
  <div class="d-flex flex-row flex-wrap" style="width: 100">
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        label="مزایده گذار"
        :label-value="auction.data.auctionInfo.user.name"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        label="نوع مزایده"
        :label-value="auction.data.auctionInfo.type"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label label="عنوان مزایده" :label-value="auction.title" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label label="دسته مزایده" />
      <v-chip
        x-small
        v-for="(category, index) in auction.data.category"
        :key="index"
        >{{ category.name }}</v-chip
      >
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        label="محل برگزاری"
        :label-value="auction.data.auctionInfo.place"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label
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
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters } = createNamespacedHelpers("guilds/auction");
import VLabel from "@polotik/components/Reusable/VLabel.vue";
export default {
  mixins: [UtilityMixin],
  components: { VLabel },
  computed: {
    ...mapGetters(["auction"]),
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
