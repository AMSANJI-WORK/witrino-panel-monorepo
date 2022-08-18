import {
  DELETE_TENDER_ASYNC,
  DELETE_TENDER_SUCCESS,
  DELETE_TENDER_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [DELETE_TENDER_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const data = await guildsRepository.deleteTender(payload);
      if (data.status === 204 && data.data === "")
        commit(DELETE_TENDER_SUCCESS, payload);
    } catch (error) {
      console.log(error);
      commit(DELETE_TENDER_FAILURE, error);
    } finally {
      rootState.fromLoading = false;
    }
  },
};
