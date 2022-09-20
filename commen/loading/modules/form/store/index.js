import { LOADING_TYPES } from "./types";
export default {
  namespaced: true,
  state: () => ({
    from: false,
    table: false,
  }),
  getters: {
    formLoading(state) {
      return state.from;
    },
    tableLoading(state) {
      return state.table;
    },
  },
  mutations: {
    [LOADING_TYPES.TOGGLE_FORM_LOADING](state) {
      state.from = !state.from;
    },
    [LOADING_TYPES.TOGGLE_TABLE_LOADING](state) {
      state.table = !state.table;
    },
  },
};
