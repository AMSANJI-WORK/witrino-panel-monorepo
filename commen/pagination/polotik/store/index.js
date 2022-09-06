import { PAGINATION_TYPES } from "./types";
export default {
  namespaced: true,
  state: () => ({
    paginationSelfItem: { page: 1, lastPage: 0, size: 5, recordCount: 0 },
    paginationSelfOffered: { page: 1, lastPage: 0, size: 5, recordCount: 0 },
    pagination: { page: 1, lastPage: 0, size: 5, recordCount: 0 },
  }),
  getters: {
    paginationSelfItem(state) {
      return state.paginationSelfItem;
    },
    paginationSelfOffered(state) {
      return state.paginationSelfOffered;
    },
    pagination(state) {
      return state.pagination;
    },
  },
  mutations: {
    [PAGINATION_TYPES.SET_PAGINATION](state, { target, data }) {
      let currentPage = Number(data.page);
      state[target].page = currentPage == 0 ? 1 : currentPage;
      state[target].lastPage = data.last_page;
      state[target].recordCount = data.count;
    },
  },
};
