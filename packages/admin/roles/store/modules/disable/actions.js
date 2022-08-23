import { roleTypes } from "@packages/admin/roles/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [roleTypes.DISABLE_ROLE_ASYNC]({ commit }, { id, updated_id }) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.disableRole(id, { updated_id });
      commit(`admin/role/${roleTypes.DISABLE_ROLE}`, id, { root: true });
      commit(roleTypes.DISABLE_ROLE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(roleTypes.DISABLE_ROLE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
