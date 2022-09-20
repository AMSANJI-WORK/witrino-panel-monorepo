import { userTypes } from "@packages/admin/users/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [userTypes.DELETE_USER_ASYNC]({ commit }, payload) {
    try {
      commit("admin/user/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await baseRepository.delete("User",payload);
      commit(`admin/user/${userTypes.DELETE_USER}`, payload, { root: true });
      commit(userTypes.DELETE_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.DELETE_USER_FAILURE, error);
    } finally {
      commit("admin/user/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
