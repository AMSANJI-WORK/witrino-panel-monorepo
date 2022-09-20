import { userTypes } from "@packages/admin/users/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [userTypes.DISABLE_USER_ADDRESS_ASYNC]({ commit }, { id, updated_id }) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await baseRepository.disableUserAddress(id, {
        updated_id,
      });
      commit(`admin/user/address/${userTypes.DISABLE_USER_ADDRESS}`, id, {
        root: true,
      });
      commit(userTypes.DISABLE_USER_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.DISABLE_USER_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
