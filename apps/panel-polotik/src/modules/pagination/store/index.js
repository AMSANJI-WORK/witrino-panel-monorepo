import * as PAGINATION_TYPES from "./types";
export default {
  namespaced: true,
  state: () => ({
    selfItemPagination: { page: 1, lastPage: 1, size: 5, recordCount: 0 },
    pagination: { page: 1, lastPage: 1, size: 5, recordCount: 0 },
  }),
  getters: {
    selfItemPagination(state) {
      return state.selfItemPagination;
    },
    pagination(state) {
      return state.pagination;
    },
  },
  mutations: {
    [PAGINATION_TYPES.SET_PAGINATION](state, { target, data }) {
      state[target].page = Number(data.page);
      state[target].lastPage = data.last_page;
      state[target].recordCount = data.count;
    },
    [PAGINATION_TYPES.REST_PAGINATION](state) {
      Object.keys(state.selfItemPagination).forEach(
        (key) => (state.selfItemPagination[key] = 0)
      );
    },
  },
};
