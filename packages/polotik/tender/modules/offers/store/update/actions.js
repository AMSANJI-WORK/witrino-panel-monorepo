import {
  UPDATE_OFFER_TENDER_ASYNC,
  UPDATE_OFFER_TENDER_SUCCESS,
  UPDATE_OFFER_TENDER_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_OFFER_TENDER_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      const { data } = await guildsRepository.updateOffer(payload.id, payload);
      commit(UPDATE_OFFER_TENDER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_OFFER_TENDER_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
