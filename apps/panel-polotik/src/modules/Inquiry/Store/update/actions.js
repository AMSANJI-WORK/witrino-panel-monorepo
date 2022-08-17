import {
  UPDATE_INQUIRY_ASYNC,
  UPDATE_INQUIRY_SUCCESS,
  UPDATE_INQUIRY_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_INQUIRY_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      rootState.submitBtnLoading = true;
      delete payload.offers;
      delete payload.user_offer;
      const { data } = await guildsRepository.updateInquiry(
        payload.id,
        payload
      );
      // console.log(data);
      commit(UPDATE_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_INQUIRY_FAILURE, error);
    } finally {
      rootState.submitBtnLoading = false;
      rootState.fromLoading = false;
    }
  },
};
