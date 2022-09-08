import { mapGetters } from "vuex";
const inquiryLoadingMixin = {
  computed: {
    ...mapGetters("guilds/inquiry", {
      skeletonLoading: "skeletonLoading/skeletonLoading",
      formLoading: "formLoading/formLoading",
    }),
  },
};
export default inquiryLoadingMixin;
