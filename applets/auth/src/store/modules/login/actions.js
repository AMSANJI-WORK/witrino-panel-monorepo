import { authTypes } from "@auth/store/type";
import RepositoryFactory from "@witrino/repositories/factory";
const authRepository = RepositoryFactory.get("auth");

export default {
  async [authTypes.AUTH_LOGIN_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await authRepository.login(payload);
      commit(`auth/${authTypes.SET_AUTHORIZE_DATA}`, data, { root: true });
      commit(authTypes.AUTH_LOGIN_SUCCESS);
    } catch (error) {
      console.log(error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
