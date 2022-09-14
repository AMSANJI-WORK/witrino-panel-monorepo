const CommenMixin = {
  computed: {
    activeService() {
      return this.$route.matched[1].path.slice(1);
    },
  },
};
export default CommenMixin;
