import { userTypes } from "@packages/admin/users/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [userTypes.GET_ALL_USER_ASYNC]({ commit }, payload) {
    try {
      commit("admin/user/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await baseRepository.get("User", payload);
      commit(`admin/user/${userTypes.SET_USER_LIST}`, data.data, {
        root: true,
      });
      commit(userTypes.GET_ALL_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.GET_ALL_USER_FAILURE, error);
    } finally {
      commit("admin/user/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
  async [userTypes.GET_ONE_USER_ASYNC]({ commit }, payload) {
    try {
      commit("admin/user/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await baseRepository.get("User", payload);
      commit(`admin/user/${userTypes.SET_USER}`, data.data[0], {
        root: true,
      });
      commit(userTypes.GET_ONE_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.GET_ONE_USER_FAILURE, error);
    } finally {
      commit("admin/user/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
