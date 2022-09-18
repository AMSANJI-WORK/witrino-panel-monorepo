import {
  CREATE_AUCTION_FAILURE,
  CREATE_AUCTION_ASYNC,
  CREATE_AUCTION_SUCCESS,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");
export default {
  async [CREATE_AUCTION_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");

      delete payload?.offers;
      delete payload?.user_offer;
      const { data } = await guildsRepository.createRequset(payload, "auction");
      commit(CREATE_AUCTION_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(CREATE_AUCTION_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
