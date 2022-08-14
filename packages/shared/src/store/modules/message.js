import Vue from "vue";
export default {
  namespaced: true,
  state: () => ({
    message: null,
    messages: [],
  }),
  actions: {
    SHOW_ERROR_MESSAGES({ commit }, payload) {
      commit("SINGLE_MESSAGE", payload);
      commit("MULTIPLE_MESSAGES", payload);
    },
  },
  mutations: {
    SINGLE_MESSAGE(state, { message }) {
      state.message = message;
      Vue.$toast.error(state.message);
    },
    MULTIPLE_MESSAGES(state, payload = {}) {
      if (payload?.detail) {
        state.messages = Object.entries(
          Object.fromEntries(
            Object.entries(payload?.detail).map(([key, [val]]) => [key, val])
          )
        ).map(([key, values]) => values);

        state.messages.forEach((message) => {
          Vue.$toast.error(message);
        });
      }
    },
  },
};
