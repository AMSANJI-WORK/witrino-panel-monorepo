export const requestLoading = {
  computed: {
    activeRoute() {
      return this.$route.matched[0].path.slice(1);
    },
    formLoading() {
      return this.$store.getters[
        `${this.activeRoute}/request/formLoading/formLoading`
      ];
    },
  },
};
