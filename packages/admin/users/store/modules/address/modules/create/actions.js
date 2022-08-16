import { userAddressTypes } from "../../types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");
export default {
  async [userAddressTypes.CREATE_USER_ADDRESS_ADDRESS_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.createUser(payload);
      commit(`admin/userAddress/${userAddressTypes.CRATE_USER_ADDRESS_ADDRESS}`, data.data[0], { root: true });
      commit(userAddressTypes.CREATE_USER_ADDRESS_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userAddressTypes.CREATE_USER_ADDRESS_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
