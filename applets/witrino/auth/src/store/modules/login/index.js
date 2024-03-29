import router from "@witrino/router";
import { authTypes } from "@applets/witrino/auth/src/store/type";
import RepositoryFactory from "@witrino/repositories/factory";
const authRepository = RepositoryFactory.get("auth");

export default {
  namespaced: true,
  actions: {
    async [authTypes.AUTH_LOGIN_ASYNC]({ commit }, payload) {
      try {
        commit("auth/loading/TOGGLE_FORM_LOADING", {}, { root: true });
        const { data } = await authRepository.login(payload);
        commit(`auth/${authTypes.SET_AUTHORIZE_DATA}`, data, { root: true });
        commit(authTypes.AUTH_LOGIN_SUCCESS);
      } catch (error) {
        console.log(error);
      } finally {
        commit("auth/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      }
    },
  },
  mutations: {
    [authTypes.AUTH_LOGIN_SUCCESS]() {
      router.push("/");
    },
    [authTypes.AUTH_LOGIN_FAILURE]() {},
  },
};
