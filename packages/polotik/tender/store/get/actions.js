import router from "@polotik/router";

import {
  // get all methods
  GET_ALL_TENDER_ASYNC,
  GET_ALL_TENDER_SUCCESS,
  GET_ALL_TENDER_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_ONE_TENDER_ASYNC,
  GET_ONE_TENDER_SUCCESS,
  GET_ONE_TENDER_FAILURE,
} from "./types";
import { setLoadingTypes } from "@commen/loading/modules/skeleton/utils";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_TENDER_ASYNC]({ commit, getters }, payload) {
    let loadingType = setLoadingTypes.pageList({
      pageLoaded: getters["skeletonLoading/pageLoaded"],
      length: getters.tenderList.length,
    });
    try {
      commit(loadingType);
      const { userId, offerUserId, target, service } = payload;
      const { data } = await guildsRepository.getAllRequest({
        pagination: getters[`${target}/pagination`],
        userId,
        service,
        offerUserId,
      });
      commit(`${target}/SET_PAGINATION`, data);
      commit(GET_ALL_TENDER_SUCCESS, data);
    } catch (error) {
      commit(GET_ALL_TENDER_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },

  async [GET_ONE_TENDER_ASYNC]({ commit }, payload) {
    let activePageIsUserOffer = router.currentRoute.path.includes("outcome");
    let loadingType = activePageIsUserOffer
      ? "request/skeletonLoading/TOGGLE_SKELETON_LOADING_OFFERS"
      : setLoadingTypes.pagePreview(router.currentRoute.path);
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getOneRequest(payload, "tender");
      commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data?.user_offer ?? []);
      commit(GET_ONE_TENDER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ONE_TENDER_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
  async [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    await dispatch(GET_ALL_TENDER_ASYNC);
  },
};
