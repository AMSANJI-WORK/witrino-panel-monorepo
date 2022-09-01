import { LOAGIND_TYPES } from "@packages/commen/loading/store/types";
export default {
  namespaced: true,
  state: () => ({
    fromLoading: false,
  }),
  getters: {
    fromLoading: (state) => state.fromLoading,
  },
  mutations: {
    [LOAGIND_TYPES.TOGGLE_FORM_LOADING](state) {
      state.fromLoading = !state.fromLoading;
    },
  },
};
