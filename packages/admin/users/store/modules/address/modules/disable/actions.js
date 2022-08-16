import { userAddressTypes } from "../../types";

import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [userAddressTypes.DISABLE_USER_ADDRESS_ADDRESS_ASYNC]({ commit }, { id, updated_id }) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.disableUser(id, { updated_id });
      commit(`admin/userAddress/${userAddressTypes.DISABLE_USER_ADDRESS_ADDRESS}`, id, { root: true });
      commit(userAddressTypes.DISABLE_USER_ADDRESS_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userAddressTypes.DISABLE_USER_ADDRESS_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
