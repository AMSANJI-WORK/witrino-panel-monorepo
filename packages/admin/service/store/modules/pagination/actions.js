import { serviceTypes } from "@packages/admin/service/store/types";

export default {
  [serviceTypes.SET_PAGINATION]({ commit }, payload) {
    commit(serviceTypes.SET_PAGINATION, payload);
  },
  [serviceTypes.REST_PAGINATION]({ commit }, payload) {
    console.log();
  },
};
