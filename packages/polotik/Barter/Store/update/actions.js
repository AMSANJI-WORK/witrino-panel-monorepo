import {
  UPDATE_BARTER_ASYNC,
  UPDATE_BARTER_SUCCESS,
  UPDATE_BARTER_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_BARTER_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      rootState.submitBtnLoading = true;
      delete payload.offers;
      delete payload.user_offer;
      const { data } = await guildsRepository.updateBarter(payload.id, payload);
      commit(UPDATE_BARTER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_BARTER_FAILURE, error);
    } finally {
      rootState.submitBtnLoading = false;
      rootState.fromLoading = false;
    }
  },
};
