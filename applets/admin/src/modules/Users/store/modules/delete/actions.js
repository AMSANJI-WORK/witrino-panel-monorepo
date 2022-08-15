import { userTypes } from "../../types";

import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [userTypes.DELETE_USER_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.deleteUser(payload);
      commit(`admin/user/${userTypes.DELETE_USER}`, payload, { root: true });
      commit(userTypes.DELETE_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.DELETE_USER_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
