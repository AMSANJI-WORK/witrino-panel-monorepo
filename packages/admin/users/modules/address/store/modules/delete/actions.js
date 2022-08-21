import { userTypes } from "@packages/admin/users/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [userTypes.DELETE_USER_ADDRESS_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.deleteUserAddress(payload);
      commit(`admin/user/address/${userTypes.DELETE_USER_ADDRESS}`, payload, {
        root: true,
      });
      commit(userTypes.DELETE_USER_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.DELETE_USER_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
