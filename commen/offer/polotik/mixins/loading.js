export const requestLoading = {
  computed: {
    activeRoute() {
      return this.$route.matched[1].path.slice(1);
    },
    formLoading() {
      return this.$store.getters[
        `guilds/${this.activeRoute}/request/formLoading/formLoading`
      ];
    },
  },
};
