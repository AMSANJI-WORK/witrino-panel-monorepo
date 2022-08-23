import { userTypes } from "@packages/admin/users/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");
export default {
  async [userTypes.CREATE_USER_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.createUser(payload);
      commit(`admin/user/${userTypes.CRAETE_USER}`, data.data[0], {
        root: true,
      });
      commit(userTypes.CREATE_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.CREATE_USER_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
