import { userTypes } from "../../types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [userTypes.GET_ALL_USER_ASYNC]({ commit, dispatch }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.getUser(payload);
      dispatch(`admin/user/pagination/${userTypes.SET_PAGINATION}`, data.data, {
        root: true,
      });
      commit(`admin/user/${userTypes.SET_USERS}`, data.data, { root: true });
      commit(userTypes.GET_ALL_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.GET_ALL_USER_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
  async [userTypes.GET_ONE_USER_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.getUser(payload);
      commit(`admin/user/${userTypes.SET_USER}`, data.data[0], {
        root: true,
      });
      commit(userTypes.GET_ONE_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.GET_ONE_USER_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
