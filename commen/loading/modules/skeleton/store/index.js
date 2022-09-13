import { LOADING_TYPES_SKELETON } from "./types";
export default {
  namespaced: true,
  state: () => ({
    skeletonLoading: {
      list: false,
      one: false,
      menu: false,
      dashboard: false,
      offers: false,
      offersMenu: false,
    },
    pageLoaded: false,
  }),
  getters: {
    skeletonLoading(state) {
      return state.skeletonLoading;
    },
    pageLoaded(state) {
      return state.pageLoaded;
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
      state.pageLoaded = true;
      state.skeletonLoading.list = !state.skeletonLoading.list;
    },
    [LOADING_TYPES_SKELETON.TOGGLE_SKELETON_LOADING_ONE](state) {
      state.skeletonLoading.one = !state.skeletonLoading.one;
    },
    [LOADING_TYPES_SKELETON.TOGGLE_SKELETON_LOADING_MENU](state) {
      state.skeletonLoading.menu = !state.skeletonLoading.menu;
    },
    [LOADING_TYPES_SKELETON.TOGGLE_SKELETON_LOADING_DASHBOARD](state) {
      state.skeletonLoading.dashboard = !state.skeletonLoading.dashboard;
    },
    [LOADING_TYPES_SKELETON.TOGGLE_SKELETON_LOADING_OFFERS](state) {
      state.skeletonLoading.offers = !state.skeletonLoading.offers;
    },
    [LOADING_TYPES_SKELETON.TOGGLE_SKELETON_LOADING_OFFERS_MENU](state) {
      state.skeletonLoading.offersMenu = !state.skeletonLoading.offersMenu;
    },
  },
};
