import { userAddressTypes } from "../../types";

import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [userAddressTypes.DELETE_USER_ADDRESS_ADDRESS_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.deleteUser(payload);
      commit(`admin/user/${userAddressTypes.DELETE_USER_ADDRESS_ADDRESS}`, payload, { root: true });
      commit(userAddressTypes.DELETE_USER_ADDRESS_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userAddressTypes.DELETE_USER_ADDRESS_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
