import { roleTypes } from "@packages/admin/roles/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [roleTypes.GET_ALL_ROLE_ASYNC]({ commit }, payload) {
    try {
      commit("admin/role/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await baseRepository.get("Role", payload);

      commit(`admin/role/${roleTypes.SET_ROLE_LIST}`, data.data, {
        root: true,
      });
      commit(roleTypes.GET_ALL_ROLE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(roleTypes.GET_ALL_ROLE_FAILURE, error);
    } finally {
      commit("admin/role/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
  async [roleTypes.GET_ONE_ROLE_ASYNC]({ commit }, payload) {
    try {
      commit("admin/role/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await baseRepository.get("Role", payload);
      commit(`admin/role/${roleTypes.SET_ROLE}`, data.data[0], {
        root: true,
      });
      commit(roleTypes.GET_ONE_ROLE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(roleTypes.GET_ONE_ROLE_FAILURE, error);
    } finally {
      commit("admin/role/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
