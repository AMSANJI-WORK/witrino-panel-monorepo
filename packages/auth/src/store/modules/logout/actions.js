import { AUTH_LOGOUT } from "./types";

export default {
  [AUTH_LOGOUT]({ commit }) {
    commit("auth/REMOVE_AUTHORIZE_DATA", {}, { root: true });
    commit(AUTH_LOGOUT);
  },
};
