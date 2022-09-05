import { LOADING_TYPES } from "./types";
export default {
  namespaced: true,
  state: () => ({
    from: false,
    table: true,
  }),
  getters: {
    formLoading(state) {
      return state.from;
    },
    tableLoading(state) {
      return state.from;
    },
  },
  mutations: {
    [LOADING_TYPES.TOGGLE_FORM_LOADING](state) {
      state.from = !state.from;
    },
  },
};
