import router from "@witrino/router";
import { authTypes } from "@applets/auth/src/store/type";
import RepositoryFactory from "@witrino/repositories/factory";
import Cookies from "js-cookie";
const authRepository = RepositoryFactory.get("auth");

export default {
  namespaced: true,
  actions: {
    async [authTypes.AUTH_REFRSH_TOKEN_ASYNC]({ commit }) {
      let refreshToken = Cookies.get("refresh_token") ?? null;
      try {
        commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
        if (refreshToken) {
          const { data } = await authRepository.refreshToken({ refreshToken });
          commit(`auth/${authTypes.SET_AUTHORIZE_DATA}`, data, { root: true });
          router.go();
        } else {
          router.push("/auth");
        }
      } catch (error) {
        console.log(error);
      } finally {
        commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      }
    },
  },
  mutations: {
    [authTypes.AUTH_REFRSH_TOKEN_SUCCESS]() {},
    [authTypes.AUTH_REFRSH_TOKEN_FAILURE]() {},
  },
};
