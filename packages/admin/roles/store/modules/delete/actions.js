import { roleTypes } from "@packages/admin/roles/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [roleTypes.DELETE_ROLE_ASYNC]({ commit }, payload) {
    try {
      commit("admin/role/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await baseRepository.delete("Role",payload);
      commit(`admin/role/${roleTypes.DELETE_ROLE}`, payload, { root: true });
      commit(roleTypes.DELETE_ROLE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(roleTypes.DELETE_ROLE_FAILURE, error);
    } finally {
      commit("admin/role/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
