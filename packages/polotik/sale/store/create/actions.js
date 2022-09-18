import {
  CREATE_SALE_FAILURE,
  CREATE_SALE_ASYNC,
  CREATE_SALE_SUCCESS,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");
export default {
  async [CREATE_SALE_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      delete payload?.offers;
      delete payload?.user_offer;
      const { data } = await guildsRepository.createSale(payload, "sales");
      commit(CREATE_SALE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(CREATE_SALE_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
