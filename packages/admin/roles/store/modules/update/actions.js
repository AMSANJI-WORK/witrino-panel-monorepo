import { roleTypes } from "@packages/admin/roles/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [roleTypes.UPDATE_ROLE_ASYNC]({ commit }, payload) {
    try {
      commit("admin/role/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await baseRepository.update(
        "Role",
        payload.id,
        payload
      );
      commit(`admin/role/${roleTypes.UPDATE_ROLE}`, data.data[0], {
        root: true,
      });
      commit(roleTypes.UPDATE_ROLE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(roleTypes.UPDATE_ROLE_FAILURE, error);
    } finally {
      commit("admin/role/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
