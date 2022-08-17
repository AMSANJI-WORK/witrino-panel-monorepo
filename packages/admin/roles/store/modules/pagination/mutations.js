import { roleTypes } from "@packages/admin/roles/store/types";

export default {
  [roleTypes.SET_PAGINATION](
    state,
    { currentPage, perPage, total, totalPages }
  ) {
    state.pagination.currentPage = currentPage;
    state.pagination.perPage = perPage;
    state.pagination.total = total;
    state.pagination.totalPages = totalPages;
  },
  [roleTypes.REST_PAGINATION](state) {},
};
