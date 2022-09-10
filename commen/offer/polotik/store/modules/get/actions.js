import * as TYPES from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [TYPES.GET_ALL_OFFER_ASYNC]({ commit, getters }, payload) {
    try {
      const { data } = await guildsRepository.getAllOffers(
        payload.target,
        payload.id,
        getters["pagination/pagination"]
      );
      commit("pagination/SET_PAGINATION", data);
      commit(TYPES.GET_ALL_OFFER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_OFFER_FAILURE, error);
    }
  },

  [TYPES.CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(TYPES.CHANGE_PAGE_PAGINATION, payload);
    dispatch(TYPES.GET_ALL_OFFER_ASYNC);
  },
};
