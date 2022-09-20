import router from "@witrino/router";
import { userTypes } from "@packages/admin/users/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [userTypes.UPDATE_USER_ASYNC]({ commit }, payload) {
    try {
      let id;
      delete payload.password;
      if (router.currentRoute.path.includes("profile"))
        id = router.currentRoute.params?.userId;
      else id = router.currentRoute.params?.id;
      commit("admin/user/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await baseRepository.update("User", id, payload);
      commit(`admin/user/${userTypes.UPDATE_USER}`, data.data[0], {
        root: true,
      });
      commit(userTypes.UPDATE_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.UPDATE_USER_FAILURE, error);
    } finally {
      commit("admin/user/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
