import { DELETE_ASYNC, DELETE_SUCCESS, DELETE_FAILURE } from "./delete.types";
import router from "@polotik/router";
import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [DELETE_ASYNC]({ commit }, payload) {
    let service = router.currentRoute.matched[0].path.slice(1);
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      await guildsRepository.deleteRequset(payload, service);
      commit(DELETE_SUCCESS, payload);
    } catch (error) {
      console.log(error);
      commit(DELETE_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
