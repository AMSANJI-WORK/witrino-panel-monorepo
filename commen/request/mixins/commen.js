const CommenMixin = {
  computed: {
    activeService() {
      return this.$route.matched[0].path.slice(1);
    },
  },
};
export default CommenMixin;
