import router from "@witrino/router";
import { userAddressTypes } from "../../types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [userAddressTypes.UPDATE_USER_ADDRESS_ADDRESS_ASYNC]({ commit }, payload) {
    try {
      let id;
      delete payload.password;
      if (router.currentRoute.path.includes("profile"))
        id = router.currentRoute.params?.userId;
      else id = router.currentRoute.params?.id;
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.updateUser(id, payload);
      commit(`admin/user/${userAddressTypes.UPDATE_USER_ADDRESS_ADDRESS}`, data.data[0], {
        root: true,
      });
      commit(userAddressTypes.UPDATE_USER_ADDRESS_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userAddressTypes.UPDATE_USER_ADDRESS_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
