import { PAGINATION_TYPES } from "./types";
export default {
  namespaced: true,
  state: () => ({
    pagination: { page: 1, lastPage: 0, size: 5, recordCount: 0 },
  }),
  getters: {
    pagination(state) {
      return state.pagination;
    },
  },
  mutations: {
    [PAGINATION_TYPES.SET_PAGINATION](state, payload) {
      let currentPage = Number(payload.page);
      state.pagination.page = currentPage == 0 ? 1 : currentPage;
      state.pagination.lastPage = payload.last_page;
      state.pagination.recordCount = payload.count;
    },
  },
};
