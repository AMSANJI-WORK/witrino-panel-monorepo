import { serviceTypes } from "@packages/admin/service/store/types";

export default {
  [serviceTypes.SET_PAGINATION](
    state,
    { currentPage, perPage, total, totalPages }
  ) {
    state.pagination.currentPage = currentPage;
    state.pagination.perPage = perPage;
    state.pagination.total = total;
    state.pagination.totalPages = totalPages;
  },
  [serviceTypes.REST_PAGINATION](state) {},
};
