import router from "@polotik/router";

import {
  // get all methods
  GET_ALL_SALE_ASYNC,
  GET_ALL_SALE_SUCCESS,
  GET_ALL_SALE_FAILURE,
  // get one methods
  GET_A_SALE_ASYNC,
  GET_A_SALE_SUCCESS,
  GET_A_SALE_FAILURE,
} from "./types";
import { setLoadingTypes } from "@commen/loading/modules/skeleton/utils";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_SALE_ASYNC]({ commit, getters }, payload) {
    let loadingType = setLoadingTypes.pageList({
      pageLoaded: getters["skeletonLoading/pageLoaded"],
      length: getters.saleList.length,
    });
    try {
      commit(loadingType);
      const { userId, offerUserId, target } = payload;
      const { data } = await guildsRepository.getAllSales({
        pagination: getters[`pagination/${target}`],
        userId,
        offerUserId,
      });
      commit("pagination/SET_PAGINATION", {
        target,
        data,
      });
      commit(GET_ALL_SALE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_SALE_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
  async [GET_A_SALE_ASYNC]({ commit }, payload) {
    let loadingType = setLoadingTypes.pagePreview(router.currentRoute.path);
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getASale(payload);
      // if (data.data?.offers)
      //   commit("request/GET_ALL_OFFER_SALE_SUCCESS", data.data.offers);
      // if (data.data?.user_offer)
      //   commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data.user_offer);
      commit(GET_A_SALE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_A_SALE_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
};
