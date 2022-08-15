export default {
  namespaced: true,
  state: () => ({
    from: {
      submitButton: false,
      input: false,
    },
    table: false,
  }),
  getters: {
    submitBtnLoading: (state) => state.from.submitButton,
    fromLoading: (state) => state.from.input,
    tableLoading: (state) => state.table,
  },
  mutations: {
    TOGGLE_FORM_LOADING(state) {
      state.from.submitButton = !state.from.submitButton;
      state.from.input = !state.from.input;
    },
    TOGGLE_TABLE_LOADING(state) {
      state.table = !state.table;
    },
  },
};
