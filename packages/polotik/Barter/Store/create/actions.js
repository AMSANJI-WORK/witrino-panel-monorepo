import {
  CREATE_BARTER_FAILURE,
  CREATE_BARTER_ASYNC,
  CREATE_BARTER_SUCCESS,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [CREATE_BARTER_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });

      delete payload.offers;
      delete payload.user_offer;
      const { data } = await guildsRepository.createBarter(payload);
      commit(CREATE_BARTER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(CREATE_BARTER_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
