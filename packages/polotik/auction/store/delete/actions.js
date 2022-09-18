import {
  DELETE_AUCTION_ASYNC,
  DELETE_AUCTION_SUCCESS,
  DELETE_AUCTION_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [DELETE_AUCTION_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      const data = await guildsRepository.deleteRequset(payload, "auction");
      if (data.status === 204 && data.data === "")
        commit(DELETE_AUCTION_SUCCESS, payload);
    } catch (error) {
      console.log(error);
      commit(DELETE_AUCTION_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
