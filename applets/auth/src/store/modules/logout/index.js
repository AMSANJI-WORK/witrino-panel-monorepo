import { authTypes } from "@applets/auth/src/store/type";
import Vue from "vue";
export default {
  namespaced: true,
  actions: {
    [authTypes.AUTH_LOGOUT]({ commit }) {
      commit(`auth/${authTypes.REMOVE_AUTHORIZE_DATA}`, {}, { root: true });
      commit(AUTH_LOGOUT);
    },
  },
  mutations: {
    [authTypes.AUTH_LOGOUT]() {
      Vue.$toast.success("شما با موفقیت خارج شدید");
    },
  },
};
