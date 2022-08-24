export default {
  namespaced: true,
  state: () => ({
    from: {
      submitButton: false,
      input: false,
    },
    table: false,
    skeleton: false,
  }),
  getters: {
    submitBtnLoading: (state) => state.from.submitButton,
    fromLoading: (state) => state.from.input,
    tableLoading: (state) => state.table,
    skeletonLoading: (state) => state.skeleton,
  },
  mutations: {
    TOGGLE_FORM_LOADING(state) {
      state.from.submitButton = !state.from.submitButton;
      state.from.input = !state.from.input;
    },
    TOGGLE_TABLE_LOADING(state) {
      state.table = !state.table;
    },
    TOGGLE_SKELETON_LOADING(state) {
      state.skeleton = !state.skeleton;
    },
  },
};
