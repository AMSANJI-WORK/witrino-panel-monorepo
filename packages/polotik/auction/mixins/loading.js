const auctionLoadingMixin = {
  computed: {
    skeletonLoading() {
      return this.$store.getters[
        "guilds/auction/skeletonLoading/skeletonLoading"
      ];
    },
    formLoading() {
      return this.$store.getters["guilds/auction/formLoading/formLoading"];
    },
  },
};
export default auctionLoadingMixin;
