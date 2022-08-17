import { userTypes } from "@packages/admin/users/store/types";

export default {
  [userTypes.SET_PAGINATION](
    state,
    { currentPage, perPage, total, totalPages }
  ) {
    state.pagination.currentPage = currentPage;
    state.pagination.perPage = perPage;
    state.pagination.total = total;
    state.pagination.totalPages = totalPages;
  },
  [userTypes.REST_PAGINATION](state) {},
};
