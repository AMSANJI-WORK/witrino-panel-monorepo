import router from "@polotik/router";

import {
  // get all methods
  GET_ALL_INQUIRY_ASYNC,
  GET_ALL_INQUIRY_SUCCESS,
  GET_ALL_INQUIRY_FAILURE,
  // get one methods
  GET_ONE_INQUIRY_ASYNC,
  GET_ONE_INQUIRY_SUCCESS,
  GET_ONE_INQUIRY_FAILURE,
} from "./types";
import { setLoadingTypes } from "@commen/loading/modules/skeleton/utils";
import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_INQUIRY_ASYNC]({ commit, getters }, payload) {
    let loadingType = setLoadingTypes.pageList({
      pageLoaded: getters["skeletonLoading/pageLoaded"],
      length: getters.inquiryList.length,
    });
    try {
      commit(loadingType);
      const { userId, offerUserId, target } = payload;
      const { data } = await guildsRepository.getAllInquiries({
        pagination: getters[`${target}/pagination`],
        userId,
        offerUserId,
      });
      commit(`${target}/SET_PAGINATION`, data);
      commit(GET_ALL_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_INQUIRY_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
  async [GET_ONE_INQUIRY_ASYNC]({ commit }, payload) {
    let activePageIsUserOffer = router.currentRoute.path.includes("outcome");
    let loadingType = setLoadingTypes.pagePreview(router.currentRoute.path);
    try {
      if (activePageIsUserOffer)
        commit("request/skeletonLoading/TOGGLE_SKELETON_LOADING_OFFERS");
      else commit(loadingType);
      const { data } = await guildsRepository.getAnInquiry(payload);
      if (data.data?.user_offer)
        commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data.user_offer);
      commit(GET_ONE_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ONE_INQUIRY_FAILURE, error);
    } finally {
      setTimeout(() => {
        if (activePageIsUserOffer)
          commit("request/skeletonLoading/TOGGLE_SKELETON_LOADING_OFFERS");
        else commit(loadingType);
      }, 1000);
    }
  },
};
