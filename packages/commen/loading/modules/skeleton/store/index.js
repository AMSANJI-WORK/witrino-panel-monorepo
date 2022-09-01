import { LOAGIND_TYPES } from "@packages/commen/loading/store/types";

export default {
  namespaced: true,
  state: () => ({
    skeletonLoading: false,
  }),
  getters: {
    skeletonLoading: (state) => state.skeletonLoading,
  },
  mutations: {
    [LOAGIND_TYPES.TOGGLE_SKELETON_LOADING](state) {
      state.skeletonLoading = !state.skeletonLoading;
    },
  },
};
