import { userTypes } from "@packages/admin/users/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [userTypes.UPDATE_USER_ADDRESS_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.updateUserAddress(
        payload.id,
        payload
      );
      commit(
        `admin/user/address/${userTypes.UPDATE_USER_ADDRESS}`,
        data.data[0],
        {
          root: true,
        }
      );
      commit(userTypes.UPDATE_USER_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.UPDATE_USER_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
