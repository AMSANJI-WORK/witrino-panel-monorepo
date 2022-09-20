import { userTypes } from "@packages/admin/users/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [userTypes.DISABLE_USER_ASYNC]({ commit }, { id, updated_id }) {
    try {
      commit("admin/user/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await baseRepository.disable("User",id, { updated_id });
      commit(`admin/user/${userTypes.DISABLE_USER}`, id, { root: true });
      commit(userTypes.DISABLE_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.DISABLE_USER_FAILURE, error);
    } finally {
      commit("admin/user/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
