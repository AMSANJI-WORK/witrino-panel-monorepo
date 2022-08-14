import { userTypes } from "../../types";

export default {
  [userTypes.SET_PAGINATION]({ commit }, payload) {
    commit(userTypes.SET_PAGINATION, payload);
  },
  [userTypes.REST_PAGINATION]({ commit }, payload) {
    console.log();
  },
};
