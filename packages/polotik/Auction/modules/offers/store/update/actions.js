import {
  UPDATE_OFFER_AUCTION_ASYNC,
  UPDATE_OFFER_AUCTION_SUCCESS,
  UPDATE_OFFER_AUCTION_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_OFFER_AUCTION_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await guildsRepository.updateOffer(payload.id, payload);
      commit(UPDATE_OFFER_AUCTION_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_OFFER_AUCTION_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
