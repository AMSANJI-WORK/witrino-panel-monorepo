import router from "@polotik/router";
import {
  GET_ALL_ASYNC,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  CHANGE_PAGE_PAGINATION,
  GET_ONE_ASYNC,
  GET_ONE_SUCCESS,
  GET_ONE_FAILURE,
} from "./get.types";
import { setLoadingTypes } from "@commen/loading/modules/skeleton/utils";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_ASYNC]({ commit, getters }, payload) {
    let service = router.currentRoute.matched[0].path.slice(1);
    let loadingType = setLoadingTypes.pageList({
      pageLoaded: getters["skeletonLoading/pageLoaded"],
      length: getters.list.length,
    });

    try {
      commit(loadingType);
      const { userId, offerUserId, target } = payload;
      const { data } = await guildsRepository.getAllRequest({
        pagination: getters[`${target}/pagination`],
        userId,
        service,
        offerUserId,
      });
      commit(`${target}/SET_PAGINATION`, data);
      commit(GET_ALL_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },

  async [GET_ONE_ASYNC]({ commit }, payload) {
    let service = router.currentRoute.matched[0].path.slice(1);
    let activePageIsUserOffer = router.currentRoute.path.includes("outcome");
    let loadingType = activePageIsUserOffer
      ? "request/skeletonLoading/TOGGLE_SKELETON_LOADING_OFFERS"
      : setLoadingTypes.pagePreview(router.currentRoute.path);
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getOneRequest(payload, service);
      commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data?.user_offer ?? []);
      commit(GET_ONE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ONE_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
  [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch(GET_ALL_ASYNC);
  },
};
