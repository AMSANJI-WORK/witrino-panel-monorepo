import router from "@polotik/router";
import * as TYPES from "./types";
import { setLoadingTypes } from "@commen/loading/modules/skeleton/utils";
import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [TYPES.GET_ALL_INQUIRY_ASYNC]({ commit, getters }, payload) {
    let loadingType = setLoadingTypes.pageList({
      pageLoaded: getters["skeletonLoading/pageLoaded"],
      length: getters.inquiryList.length,
    });
    try {
      commit(loadingType);
      const { userId, offerUserId, target } = payload;
      const { data } = await guildsRepository.getAllRequest({
        pagination: getters[`${target}/pagination`],
        userId,
        service: "inquiry",
        offerUserId,
      });
      commit(`${target}/SET_PAGINATION`, data);
      commit(TYPES.GET_ALL_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(TYPES.GET_ALL_INQUIRY_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
  async [TYPES.GET_ONE_INQUIRY_ASYNC]({ commit }, payload) {
    let activePageIsUserOffer = router.currentRoute.path.includes("outcome");
    let loadingType = activePageIsUserOffer
      ? "request/skeletonLoading/TOGGLE_SKELETON_LOADING_OFFERS"
      : setLoadingTypes.pagePreview(router.currentRoute.path);
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getOneRequest(payload, "inquiry");
      commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data?.user_offer ?? []);
      commit(TYPES.GET_ONE_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(TYPES.GET_ONE_INQUIRY_FAILURE, error);
    } finally {
      setTimeout(() => {
        commit(loadingType);
      }, 1000);
    }
  },
};
