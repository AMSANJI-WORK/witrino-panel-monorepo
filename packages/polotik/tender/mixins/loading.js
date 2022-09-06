import { mapGetters } from "vuex";
const tenderLoadingMixin = {
  computed: {
    ...mapGetters("guilds/tender", {
      skeletonLoading: "skeletonLoading/skeletonLoading",
      formLoading: "formLoading/formLoading",
    }),
  },
};
export default tenderLoadingMixin;
