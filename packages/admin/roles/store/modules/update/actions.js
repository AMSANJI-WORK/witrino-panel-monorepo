import router from "@witrino/router";
import { roleTypes } from "@packages/admin/roles/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [roleTypes.UPDATE_ROLE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.updateRole(payload.id, payload);
      commit(`admin/role/${roleTypes.UPDATE_ROLE}`, data.data[0], {
        root: true,
      });
      commit(roleTypes.UPDATE_ROLE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(roleTypes.UPDATE_ROLE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
