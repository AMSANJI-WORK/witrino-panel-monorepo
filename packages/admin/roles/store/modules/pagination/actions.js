import { roleTypes } from "@packages/admin/roles/store/types";

export default {
  [roleTypes.SET_PAGINATION]({ commit }, payload) {
    commit(roleTypes.SET_PAGINATION, payload);
  },
  [roleTypes.REST_PAGINATION]({ commit }, payload) {
    console.log();
  },
};
