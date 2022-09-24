import { mapGetters } from "vuex";
const barterLoadingMixin = {
  computed: {
    ...mapGetters("barter", {
      skeletonLoading: "skeletonLoading/skeletonLoading",
      formLoading: "formLoading/formLoading",
    }),
  },
};
export default barterLoadingMixin;
