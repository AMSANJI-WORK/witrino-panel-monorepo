import { mapGetters } from "vuex";
const barterLoadingMixin = {
  computed: {
    ...mapGetters("guilds/barter", {
      skeletonLoading: "skeletonLoading/skeletonLoading",
      formLoading: "formLoading/formLoading",
    }),
  },
};
export default barterLoadingMixin;
