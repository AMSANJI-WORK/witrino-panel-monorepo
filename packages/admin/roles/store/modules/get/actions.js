import { roleTypes } from "@packages/admin/roles/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [roleTypes.GET_ALL_ROLE_ASYNC]({ commit, dispatch }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.getRole(payload);
      dispatch(`admin/role/pagination/${roleTypes.SET_PAGINATION}`, data.data, {
        root: true,
      });
      commit(`admin/role/${roleTypes.SET_ROLE_LIST}`, data.data, { root: true });
      commit(roleTypes.GET_ALL_ROLE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(roleTypes.GET_ALL_ROLE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
  async [roleTypes.GET_ONE_ROLE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.getRole(payload);
      commit(`admin/role/${roleTypes.SET_ROLE}`, data.data[0], {
        root: true,
      });
      commit(roleTypes.GET_ONE_ROLE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(roleTypes.GET_ONE_ROLE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
