import { roleTypes } from "@packages/admin/roles/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [roleTypes.DELETE_ROLE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.deleteRole(payload);
      commit(`admin/role/${roleTypes.DELETE_ROLE}`, payload, { root: true });
      commit(roleTypes.DELETE_ROLE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(roleTypes.DELETE_ROLE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
