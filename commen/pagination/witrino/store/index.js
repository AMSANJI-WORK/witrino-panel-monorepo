import * as type from "./types";
export default {
  namespaced: true,
  state: () => ({
    pagination: { perPage: 20, currentPage: 1, totalPages: 1, total: 1 },
  }),
  getters: {
    pagination(state) {
      return state.pagination;
    },
  },
  mutations: {
    [type.paginationSet](state, payload) {
      state.pagination.total = payload.total;
      state.pagination.perPage = payload.perPage;
      state.pagination.totalPages = payload.totalPages;
      state.pagination.currentPage = payload.currentPage;
    },
    [type.paginationReset](state) {
      Object.assign(state.pagination, {
        perPage: 20,
        currentPage: 1,
        totalPages: 1,
        total: 1,
      });
    },
  },
};
