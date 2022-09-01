import {
  CREATE_TENDER_FAILURE,
  CREATE_TENDER_ASYNC,
  CREATE_TENDER_SUCCESS,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");
export default {
  async [CREATE_TENDER_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      delete payload?.offers;
      delete payload?.user_offer;
      const { data } = await guildsRepository.createTender(payload);
      commit(CREATE_TENDER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(CREATE_TENDER_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });

    }
  },
};
