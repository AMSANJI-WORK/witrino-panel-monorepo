import {
  UPDATE_INQUIRY_ASYNC,
  UPDATE_INQUIRY_SUCCESS,
  UPDATE_INQUIRY_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_INQUIRY_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");

      delete payload.offers;
      delete payload.user_offer;
      const { data } = await guildsRepository.updateRequset(
        payload.id,
        "inquiry",
        payload
      );
      commit(UPDATE_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_INQUIRY_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
