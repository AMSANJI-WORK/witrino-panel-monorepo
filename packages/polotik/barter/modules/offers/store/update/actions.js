import {
  UPDATE_OFFER_BARTER_ASYNC,
  UPDATE_OFFER_BARTER_SUCCESS,
  UPDATE_OFFER_BARTER_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_OFFER_BARTER_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      const { data } = await guildsRepository.updateOffer(payload.id, payload);
      commit(UPDATE_OFFER_BARTER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_OFFER_BARTER_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
