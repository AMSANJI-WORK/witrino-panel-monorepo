import { CREATE_FAILURE, CREATE_ASYNC, CREATE_SUCCESS } from "./create.types";
import router from "@polotik/router";
import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");
export default {
  async [CREATE_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      let service = router.currentRoute.matched[0].path.slice(1);
      delete payload?.offers;
      delete payload?.user_offer;
      const { data } = await guildsRepository.createRequset(payload, service);
      commit(CREATE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(CREATE_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
