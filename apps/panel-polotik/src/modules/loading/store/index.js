import * as LOADING_TYPES from "./types";
export default {
  namespaced: true,
  state: () => ({
    fromLoading: false,
    skletonLoding: { list: false, one: false },
  }),
  getters: {
    fromLoading(state) {
      return state.fromLoading;
    },
    skletonLoding(state) {
      return state.skletonLoding;
    },
  },
  mutations: {
    [LOADING_TYPES.TOGGLE_FORM_LOADING](state) {
      state.fromLoading = !state.fromLoading;
    },
    [LOADING_TYPES.TOGGLE_SKELETON_LOADING](state) {
      Object.keys(state.skletonLoding).forEach(
        (key) => (state.skletonLoding[key] = !state.skletonLoding[key])
      );
    },
    [LOADING_TYPES.TOGGLE_SKELETON_LOADING_LIST](state) {
      state.skletonLoding.list = !state.skletonLoding.list;
    },
    [LOADING_TYPES.TOGGLE_SKELETON_LOADING_ONE](state) {
      state.skletonLoding.one = !state.skletonLoding.one;
    },
  },
};
