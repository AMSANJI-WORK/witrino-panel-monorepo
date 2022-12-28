export default {
  namespaced: true,
  state: () => ({
    step: 1,
  }),
  getters: {
    step: (state) => state.step,
  },
  mutations: {
    CHANGE_STEP(state, payload) {
      state.step = payload;
    },
    RESET_STEP(state) {
      state.step = 1;
    },
  },
};
