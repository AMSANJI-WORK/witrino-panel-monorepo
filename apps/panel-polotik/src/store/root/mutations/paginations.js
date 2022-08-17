export default {
  SET_PAGINATION(state, { target, data }) {
    state[target].page = Number(data.page);
    state[target].lastPage = data.last_page;
    state[target].recordCount = data.count;
  },
  REST_PAGINATION(state) {
    Object.assign(state.selfItemPagination, state.defaultPagination);
    Object.assign(state.pagination, state.defaultPagination);
  },
};
