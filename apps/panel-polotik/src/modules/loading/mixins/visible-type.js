import { mapGetters, mapMutations } from "vuex";
import * as LOADING_TYPES from "@polotik/modules/loading/store/types";
const ToggleVisibleMixin = {
  computed: {
    ...mapGetters("loading", ["skletonLoding"]),
  },
  methods: {
    ...mapMutations("loading", {
      toggleSkeletonLoadingList: LOADING_TYPES.TOGGLE_SKELETON_LOADING_LIST,
      toggleSkeletonLoadingOne: LOADING_TYPES.TOGGLE_SKELETON_LOADING_ONE,
    }),
  },
};
export default ToggleVisibleMixin;
