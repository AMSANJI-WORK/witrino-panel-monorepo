import { UPDATE_ASYNC, UPDATE_SUCCESS, UPDATE_FAILURE } from "./update.types";
import router from "@polotik/router";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_ASYNC]({ commit }, payload) {
    let service = router.currentRoute.matched[0].path.slice(1);
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      delete payload.created_at;
      delete payload.updated_at;
      delete payload?.offers;
      delete payload?.user_offer;
      delete payload?.data?.offers;
      delete payload?.data?.user_offer;
      if (payload.data?.category)
        payload.data.category = payload.data.category.map((el) => {
          return el?.id ? el.id : el;
        });
      const { data } = await guildsRepository.updateRequset(
        payload.id,
        service,
        payload
      );
      commit(UPDATE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
