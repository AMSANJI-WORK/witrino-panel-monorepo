import {
  CREATE_OFFER_INQUIRY_FAILURE,
  CREATE_OFFER_INQUIRY_ASYNC,
  CREATE_OFFER_INQUIRY_SUCCESS,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");
export default {
  async [CREATE_OFFER_INQUIRY_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      const { data } = await guildsRepository.createOffer(payload);
      commit(CREATE_OFFER_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(CREATE_OFFER_INQUIRY_FAILURE, error);
    } finally {
      commit("upload/REST_IMAGES", {}, { root: true });
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};