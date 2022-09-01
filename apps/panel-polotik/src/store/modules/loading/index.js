import * as LOADING_TYPES from "./types";
export default {
  namespaced: true,
  state: () => ({
    fromLoading: false,
    skletonLoding: false,
  }),
  getters: {
    fromLoading(state) {
      return state.fromLoading;
    },
    skletonLoding(state) {
      return state.fromLoading;
    },
  },
  mutations: {
    [LOADING_TYPES.TOGGLE_FORM_LOADING](state) {
      state.fromLoading = !state.fromLoading;
    },
    [LOADING_TYPES.TOGGLE_SKELETON_LOADING](state) {
      state.skletonLoding = !state.skletonLoding;
    },
  },
};
