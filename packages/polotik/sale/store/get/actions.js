import router from "@polotik/router";

import {
  // get all methods
  GET_ALL_SALE_ASYNC,
  GET_ALL_SALE_SUCCESS,
  GET_ALL_SALE_FAILURE,
  // get one methods
  GET_ONE_SALE_ASYNC,
  GET_ONE_SALE_SUCCESS,
  GET_ONE_SALE_FAILURE,
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
        pagination: getters[`${target}/pagination`],
        userId,
        offerUserId,
      });
      commit(`${target}/SET_PAGINATION`, data);
      commit(GET_ALL_SALE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_SALE_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
  async [GET_ONE_SALE_ASYNC]({ commit }, payload) {
    let loadingType = setLoadingTypes.pagePreview(router.currentRoute.path);
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getASale(payload);
      commit(GET_ONE_SALE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ONE_SALE_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
};
