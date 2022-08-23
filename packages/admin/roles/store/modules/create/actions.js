import { roleTypes } from "@packages/admin/roles/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");
export default {
  async [roleTypes.CREATE_ROLE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.createRole(payload);
      commit(`admin/role/${roleTypes.CRAETE_ROLE}`, data.data[0], {
        root: true,
      });
      commit(roleTypes.CREATE_ROLE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(roleTypes.CREATE_ROLE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
