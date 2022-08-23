import { themeTypes } from "@packages/admin/theme/store/types";

export default {
  [themeTypes.SET_PAGINATION]({ commit }, payload) {
    commit(themeTypes.SET_PAGINATION, payload);
  },
  [themeTypes.REST_PAGINATION]({ commit }, payload) {
    console.log();
  },
};
