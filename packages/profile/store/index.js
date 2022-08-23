import Cookies from "js-cookie";
export default {
  namespaced: true,
  state: () => ({
    fromPath: Cookies.get("from-path") ?? null,
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
