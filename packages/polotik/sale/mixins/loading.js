import { mapGetters } from "vuex";
const saleLoadingMixin = {
  computed: {
    ...mapGetters("guilds/sale", {
      skeletonLoading: "skeletonLoading/skeletonLoading",
      formLoading: "formLoading/formLoading",
    }),
  },
};
export default saleLoadingMixin;
