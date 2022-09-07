export default {
  namespaced: true,
  state: () => ({
    from: {
      input: false,
    },
    table: false,
  }),
  getters: {
    formLoading: (state) => state.from.input,
    tableLoading: (state) => state.table,
  },
  mutations: {
    TOGGLE_FORM_LOADING(state) {
      state.from.input = !state.from.input;
    },
    TOGGLE_TABLE_LOADING(state) {
      state.table = !state.table;
    },
  },
};
