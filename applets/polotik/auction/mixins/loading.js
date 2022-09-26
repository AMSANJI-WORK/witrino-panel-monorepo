const auctionLoadingMixin = {
  computed: {
    skeletonLoading() {
      return this.$store.getters["auction/skeletonLoading/skeletonLoading"];
    },
    formLoading() {
      return this.$store.getters["auction/formLoading/formLoading"];
    },
  },
};
export default auctionLoadingMixin;
