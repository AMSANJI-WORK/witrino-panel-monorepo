import Vue from "vue";
import router from "@witrino/router";
import { authTypes } from "@applets/witrino/auth/src/store/type";
import Cookies from "js-cookie";
const authRepository = RepositoryFactory.get("auth");
import RepositoryFactory from "@witrino/repositories/factory";

export default {
  namespaced: true,
  actions: {
    async [authTypes.AUTH_SET_PASS_ASYNC]({ commit }, payload) {
      try {
        commit("auth/loading/TOGGLE_FORM_LOADING", {}, { root: true });
        const { data } = await authRepository.setPassword(payload);
        commit(authTypes.AUTH_SET_PASS_SUCCESS, data);
      } catch (error) {
        console.log(error);
        commit(authTypes.AUTH_SET_PASS_FAILURE, error);
      } finally {
        commit("auth/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      }
    },
  },
  mutations: {
    [authTypes.AUTH_SET_PASS_SUCCESS](state, payload) {
      const { message } = payload;
      Cookies.remove("otp");
      Vue.$toast.success(message);
      router.push("authorize");
    },
    [authTypes.AUTH_SET_PASS_FAILURE](state) {},
  },
};
