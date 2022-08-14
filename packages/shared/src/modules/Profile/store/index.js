export default {
  namespaced: true,
  state: () => ({
    fromPath: null,
  }),
  getters: {
    fromPath: (state) => state.fromPath,
  },
  mutations: {
    SET_FROM_PATH(state, payload) {
      state.fromPath = payload;
    },
  },
};
