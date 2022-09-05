import { mapGetters } from "vuex";
const ToggleVisibleMixin = {
  computed: {
    ...mapGetters("loading", ["skeletonLoading"]),
  },
};
export default ToggleVisibleMixin;
