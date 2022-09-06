import {
  DELETE_OFFER_TENDER_ASYNC,
  DELETE_OFFER_TENDER_SUCCESS,
  DELETE_OFFER_TENDER_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [DELETE_OFFER_TENDER_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      const data = await guildsRepository.deleteOffer(payload);
      if (data.status === 204 && data.data === "")
        commit(DELETE_OFFER_TENDER_SUCCESS, payload);
    } catch (error) {
      console.log(error);
      commit(DELETE_OFFER_TENDER_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
