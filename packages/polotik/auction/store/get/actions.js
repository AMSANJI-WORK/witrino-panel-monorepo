import router from "@polotik/router";
import {
  // get all methods
  GET_ALL_AUCTION_ASYNC,
  GET_ALL_AUCTION_SUCCESS,
  GET_ALL_AUCTION_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_ONE_AUCTION_ASYNC,
  GET_ONE_AUCTION_SUCCESS,
  GET_ONE_AUCTION_FAILURE,
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
        pagination: getters[`${target}/pagination`],
        userId,
        offerUserId,
      });
      commit(`${target}/SET_PAGINATION`, data);
      commit(GET_ALL_AUCTION_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_AUCTION_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },

  async [GET_ONE_AUCTION_ASYNC]({ commit }, payload) {
    let loadingType = setLoadingTypes.pagePreview(router.currentRoute.path);
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getAnAuction(payload);
      // if (data.data?.offers)
      // commit("request/GET_ALL_OFFER_SUCCESS", data.data.offers);
      // if (data.data?.user_offer)
      //   commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data.user_offer);
      commit(GET_ONE_AUCTION_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ONE_AUCTION_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
  [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch(GET_ALL_AUCTION_ASYNC);
  },
};
