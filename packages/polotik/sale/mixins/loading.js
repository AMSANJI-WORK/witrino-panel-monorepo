import { mapGetters } from "vuex";
const saleLoadingMixin = {
  computed: {
    ...mapGetters("sale", {
      skeletonLoading: "skeletonLoading/skeletonLoading",
      formLoading: "formLoading/formLoading",
    }),
  },
};
export default saleLoadingMixin;
