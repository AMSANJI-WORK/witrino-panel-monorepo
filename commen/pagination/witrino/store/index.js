import * as TYPES from "./types";
export default {
  namespaced: true,
  state: () => ({
    pagination: { perPage: 10, currentPage: 1, totalPages: 1, total: 1 },
  }),
  getters: {
    pagination(state) {
      return state.pagination;
    },
  },
  mutations: {
    [TYPES.PAGINATION_SET](state, payload) {
      console.log(payload);
      state.pagination.total = payload.total;
      state.pagination.perPage = payload.perPage;
      state.pagination.totalPages = payload.totalPages;
      state.pagination.currentPage = payload.currentPage;
    },
    [TYPES.PAGINATION_RESET](state) {
      Object.assign(state.pagination, {
        perPage: 20,
        currentPage: 1,
        totalPages: 1,
        total: 1,
      });
    },
  },
};
