import {
  // get all methods
  GET_ALL_OFFER_ASYNC,
  GET_ALL_OFFER_SUCCESS,
  GET_ALL_OFFER_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_AN_OFFER_ASYNC,
  GET_AN_OFFER_SUCCESS,
  GET_AN_OFFER_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_OFFER_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const { pagination } = rootState;
      const { data } = await guildsRepository.getAllOffers(
        payload.target,
        payload.id,
        pagination
      );
      commit(
        "SET_PAGINATION",
        {
          target: "pagination",
          data: {
            page: data.page,
            last_page: data.last_page,
            count: data.count,
          },
        },
        { root: true }
      );
      commit(GET_ALL_OFFER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_OFFER_FAILURE, error);
    } finally {
      rootState.fromLoading = false;
    }
  },

  async [GET_AN_OFFER_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const { data } = await guildsRepository.getAOffer(
        payload.target,
        payload.id
      );
      commit(GET_AN_OFFER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_AN_OFFER_FAILURE, error);
    } finally {
      rootState.fromLoading = false;
    }
  },
  async [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch("GET_ALL_OFFER_ASYNC");
  },
};
