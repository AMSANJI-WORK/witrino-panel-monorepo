import {
  UPDATE_SALE_ASYNC,
  UPDATE_SALE_SUCCESS,
  UPDATE_SALE_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_SALE_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      rootState.submitBtnLoading = true;
      delete payload.offers;
      delete payload.user_offer;
      const { data } = await guildsRepository.updateSale(payload.id, payload);
      commit(UPDATE_SALE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_SALE_FAILURE, error);
    } finally {
      rootState.submitBtnLoading = false;
      rootState.fromLoading = false;
    }
  },
};
