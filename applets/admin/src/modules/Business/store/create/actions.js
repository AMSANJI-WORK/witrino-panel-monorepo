import {
  CREATE_INQUIRY_FAILURE,
  CREATE_INQUIRY_ASYNC,
  CREATE_INQUIRY_SUCCESS,
} from "./types";

import RepositoryFactory from "@witrino/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");
export default {
  async [CREATE_INQUIRY_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.submitBtnLoading = true;
      rootState.fromLoading = true;
      delete payload?.offers;
      delete payload?.business_offer;
      const { data } = await guildsRepository.createInquiry(payload);
      commit(CREATE_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(CREATE_INQUIRY_FAILURE, error);
    } finally {
      rootState.submitBtnLoading = false;
      rootState.fromLoading = false;
    }
  },
};