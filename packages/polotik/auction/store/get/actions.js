import router from "@polotik/router";
import {
  // get all methods
  GET_ALL_AUCTION_ASYNC,
  GET_ALL_AUCTION_SUCCESS,
  GET_ALL_AUCTION_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_AN_AUCTION_ASYNC,
  GET_AN_AUCTION_SUCCESS,
  GET_AN_AUCTION_FAILURE,
} from "./types";
import { setLoadingTypes } from "@commen/loading/modules/skeleton/utils";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_AUCTION_ASYNC]({ commit, getters }, payload) {
    let loadingType = setLoadingTypes.pageList({
      pageLoaded: getters["skeletonLoading/pageLoaded"],
      length: getters.auctionList.length,
    });

    try {
      commit(loadingType);
      const { userId, offerUserId, target } = payload;
      const { data } = await guildsRepository.getAllAuctions({
        pagination: getters[`pagination/${target}`],
        userId,
        offerUserId,
      });
      commit("pagination/SET_PAGINATION", {
        target,
        data,
      });
      commit(GET_ALL_AUCTION_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_AUCTION_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },

  async [GET_AN_AUCTION_ASYNC]({ commit }, payload) {
    let loadingType = setLoadingTypes.pagePreview(router.currentRoute.path);
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getAnAuction(payload);
      if (data.data?.offers)
        commit("request/GET_ALL_OFFER_AUCTION_SUCCESS", data.data.offers);
      if (data.data?.user_offer)
        commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data.user_offer);
      commit(GET_AN_AUCTION_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_AN_AUCTION_FAILURE, error);
    } finally {
      commit(loadingType);
    }
  },
  async [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch("GET_ALL_AUCTION_ASYNC");
  },
};
