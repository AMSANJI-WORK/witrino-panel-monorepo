import { themeTypes } from "@packages/admin/theme/store/types";

export default {
  [themeTypes.SET_PAGINATION](
    state,
    { currentPage, perPage, total, totalPages }
  ) {
    state.pagination.currentPage = currentPage;
    state.pagination.perPage = perPage;
    state.pagination.total = total;
    state.pagination.totalPages = totalPages;
  },
  [themeTypes.REST_PAGINATION](state) {},
};
