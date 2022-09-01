import {
  CREATE_OFFER_AUCTION_FAILURE,
  CREATE_OFFER_AUCTION_ASYNC,
  CREATE_OFFER_AUCTION_SUCCESS,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");
export default {
  async [CREATE_OFFER_AUCTION_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await guildsRepository.createOffer(payload);
      commit(CREATE_OFFER_AUCTION_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(CREATE_OFFER_AUCTION_FAILURE, error);
    } finally {
      commit("upload/REST_IMAGES", {}, { root: true });
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};