<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <OfferSkeleton v-show="skeletonLoading.offers" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet class="transparent">
        <OfferPage v-show="!skeletonLoading.offers" />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import OfferPage from "../components/page.vue";
import OfferSkeleton from "@commen/loading/modules/skeleton/components/Offer.vue";
export default {
  components: {
    OfferPage,
    OfferSkeleton,
  },
  beforeRouteLeave(to, from, next) {
    next();
    this.$store.commit(
      `${this.$route.matched[0].path.slice(1)}/request/RESET_OFFERS`
    );
  },
  computed: {
    dataSource() {
      return this.$store.getters[`${this.activeService}/${this.activeService}`];
    },
    activeService() {
      return this.$route.matched[0].path.slice(1);
    },
    activeServiceUpperCase() {
      return this.activeService.toUpperCase();
    },
    skeletonLoading() {
      return this.$store.getters[
        `${this.activeService}/request/skeletonLoading/skeletonLoading`
      ];
    },
  },
  methods: {
    requestGetOne() {
      this.$store.dispatch(
        `${this.activeService}/GET_ONE_${this.activeServiceUpperCase}_ASYNC`,
        this.$route.params.id
      );
    },
    requestOffersGetAll() {
      this.$store.dispatch(
        `${this.activeService}/request/GET_ALL_OFFER_ASYNC`,
        {
          target: this.activeService,
          id: this.$route.params.id,
        }
      );
    },
  },
  created() {
    if (!this.$route.path.includes("outcome")) this.requestOffersGetAll();
    this.requestGetOne();
  },
};
</script>

<style lang="scss" scoped></style>
