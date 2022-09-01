import {
  CREATE_INQUIRY_FAILURE,
  CREATE_INQUIRY_ASYNC,
  CREATE_INQUIRY_SUCCESS,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");
export default {
  async [CREATE_INQUIRY_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      delete payload?.offers;
      delete payload?.user_offer;
      const { data } = await guildsRepository.createInquiry(payload);
      commit(CREATE_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(CREATE_INQUIRY_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
