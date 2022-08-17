import {
  DELETE_SALE_ASYNC,
  DELETE_SALE_SUCCESS,
  DELETE_SALE_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [DELETE_SALE_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const data = await guildsRepository.deleteSale(payload);
      if (data.status === 204 && data.data === "")
        commit(DELETE_SALE_SUCCESS, payload);
    } catch (error) {
      console.log(error);
      commit(DELETE_SALE_FAILURE, error);
    } finally {
      rootState.fromLoading = false;
    }
  },
};
