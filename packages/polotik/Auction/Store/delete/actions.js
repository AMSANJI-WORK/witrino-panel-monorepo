import {
  DELETE_AUCTION_ASYNC,
  DELETE_AUCTION_SUCCESS,
  DELETE_AUCTION_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [DELETE_AUCTION_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const data = await guildsRepository.deleteAuction(payload);
      if (data.status === 204 && data.data === "")
        commit(DELETE_AUCTION_SUCCESS, payload);
    } catch (error) {
      console.log(error);
      commit(DELETE_AUCTION_FAILURE, error);
    } finally {
      rootState.fromLoading = false;
    }
  },
};
