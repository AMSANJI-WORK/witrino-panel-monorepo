import { PAGINATION_TYPE } from "./types";

export default {
  namespaced: true,
  getters: {
    pagination: (state) => state.pagination,
  },
  state: () => ({
    pagination: {
      total: null,
      perPage: null,
      currentPage: null,
      totalPages: null,
    },
  }),
  mutations: {
    [PAGINATION_TYPE.SET_PAGINATION](state, payload) {
      Object.assign(state.pagination, payload);
    },
    [PAGINATION_TYPE.REST_PAGINATION](state) {
      Object.keys(state.pagination).forEach(
        (key) => (state.pagination[key] = null)
      );
    },
  },

  actions: {
    [PAGINATION_TYPE.SET_PAGINATION]({ commit }, payload) {
      commit(PAGINATION_TYPE.SET_PAGINATION, payload);
    },
    [PAGINATION_TYPE.REST_PAGINATION]({ commit }) {
      commit(PAGINATION_TYPE.REST_PAGINATION);
    },
  },
};
