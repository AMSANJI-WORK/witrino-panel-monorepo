import { LOADING_TYPES_SKELETON } from "./types";
export default {
  namespaced: true,
  state: () => ({
    skeletonLoading: {
      list: false,
      one: false,
      menu: false,
    },
  }),
  getters: {
    skeletonLoading(state) {
      return state.skeletonLoading;
    },
  },
  mutations: {
    [LOADING_TYPES_SKELETON.TOGGLE_FORM_LOADING](state) {
      state.formLoading = !state.formLoading;
    },
    [LOADING_TYPES_SKELETON.TOGGLE_SKELETON_LOADING](state) {
      Object.keys(state.skeletonLoading).forEach(
        (key) => (state.skeletonLoading[key] = !state.skeletonLoading[key])
      );
    },
    [LOADING_TYPES_SKELETON.TOGGLE_SKELETON_LOADING_LIST](state) {
      state.skeletonLoading.list = !state.skeletonLoading.list;
    },
    [LOADING_TYPES_SKELETON.TOGGLE_SKELETON_LOADING_ONE](state) {
      state.skeletonLoading.one = !state.skeletonLoading.one;
    },
    [LOADING_TYPES_SKELETON.TOGGLE_SKELETON_LOADING_MENU](state) {
      state.skeletonLoading.menu = !state.skeletonLoading.menu;
    },
  },
};
