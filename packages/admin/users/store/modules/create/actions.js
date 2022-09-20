import { userTypes } from "@packages/admin/users/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");
export default {
  async [userTypes.CREATE_USER_ASYNC]({ commit }, payload) {
    try {
      commit("admin/user/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await baseRepository.create("User", payload);
      commit(`admin/user/${userTypes.CRAETE_USER}`, data.data[0], {
        root: true,
      });
      commit(userTypes.CREATE_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.CREATE_USER_FAILURE, error);
    } finally {
      commit("admin/user/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
