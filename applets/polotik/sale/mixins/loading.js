import { mapGetters } from "vuex";
const saleLoadingMixin = {
  computed: {
    ...mapGetters("sales", {
      skeletonLoading: "skeletonLoading/skeletonLoading",
      formLoading: "formLoading/formLoading",
    }),
  },
};
export default saleLoadingMixin;
