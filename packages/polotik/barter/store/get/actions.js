import router from "@polotik/router";
import {
  // get all methods
  GET_ALL_BARTER_ASYNC,
  GET_ALL_BARTER_SUCCESS,
  GET_ALL_BARTER_FAILURE,
  // get one methods
  GET_ONE_BARTER_ASYNC,
  GET_ONE_BARTER_SUCCESS,
  GET_ONE_BARTER_FAILURE,
} from "./types";
import { setLoadingTypes } from "@commen/loading/modules/skeleton/utils";
import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_BARTER_ASYNC]({ commit, getters }, payload) {
    let loadingType = setLoadingTypes.pageList({
      pageLoaded: getters["skeletonLoading/pageLoaded"],
      length: getters.barterList.length,
    });

    try {
      commit(loadingType);
      const { userId, offerUserId, target } = payload;
      const { data } = await guildsRepository.getAllRequest({
        pagination: getters[`${target}/pagination`],
        userId,
        service: "barter",
        offerUserId,
      });
      commit(`${target}/SET_PAGINATION`, data);
      commit(GET_ALL_BARTER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_BARTER_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },

  async [GET_ONE_BARTER_ASYNC]({ commit }, payload) {
    let activePageIsUserOffer = router.currentRoute.path.includes("outcome");
    let loadingType = activePageIsUserOffer
      ? "request/skeletonLoading/TOGGLE_SKELETON_LOADING_OFFERS"
      : setLoadingTypes.pagePreview(router.currentRoute.path);
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getOneRequest(payload, "barter");
      if (data.data?.offers)
        commit("request/GET_ALL_OFFER_SUCCESS", data.data.offers);
      if (data.data?.user_offer)
        commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data.user_offer);
      commit(GET_ONE_BARTER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ONE_BARTER_FAILURE, error);
    } finally {
      setTimeout(() => {
        commit(loadingType);
      }, 1000);
    }
  },
};
