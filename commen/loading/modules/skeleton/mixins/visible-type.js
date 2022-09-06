import { mapGetters, mapMutations } from "vuex";
const ToggleVisibleMixin = {
  computed: {
    ...mapGetters("loading", ["skletonLoding"]),
  },
};
export default ToggleVisibleMixin;
