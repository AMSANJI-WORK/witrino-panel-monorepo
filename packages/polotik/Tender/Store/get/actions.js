import router from "@polotik/router";

import {
  // get all methods
  GET_ALL_TENDER_ASYNC,
  GET_ALL_TENDER_SUCCESS,
  GET_ALL_TENDER_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_A_TENDER_ASYNC,
  GET_A_TENDER_SUCCESS,
  GET_A_TENDER_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_TENDER_ASYNC]({ commit, getters }, payload) {
    let loadingType =
      getters.tenderList.length == 0
        ? "skeletonLoading/TOGGLE_SKELETON_LOADING_LIST"
        : "skeletonLoading/TOGGLE_SKELETON_LOADING_MENU";
    try {
      commit(loadingType);
      let { paginationSelfItem, pagination, paginationSelfOffered } =
        getters.pagination;
      if (payload?.currentUserId) {
        const { data } = await guildsRepository.getAllTenders({
          pagination: paginationSelfItem,
          userId: payload.currentUserId,
          offerUserId: null,
        });
        commit("pagination/SET_PAGINATION", {
          target: "paginationSelfItem",
          data,
        });
        commit(GET_ALL_TENDER_SUCCESS, data);
      } else if (payload?.offerUserId) {
        const { data } = await guildsRepository.getAllTenders({
          pagination: paginationSelfOffered,
          userId: null,
          offerUserId: payload.offerUserId,
        });
        commit("pagination/SET_PAGINATION", {
          target: "paginationSelfOffered",
          data,
        });
        commit(GET_ALL_TENDER_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllTenders({
          pagination,
          userId: null,
          offerUserId: null,
        });
        commit("pagination/SET_PAGINATION", {
          target: "pagination",
          data,
        });
        commit(GET_ALL_TENDER_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_TENDER_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },

  async [GET_A_TENDER_ASYNC]({ commit }, payload) {
    let loadingType = router.currentRoute.path.includes("edit")
      ? "formLoading/TOGGLE_FORM_LOADING"
      : "skeletonLoading/TOGGLE_SKELETON_LOADING_ONE";
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getATender(payload);
      if (data.data?.offers)
        commit("request/GET_ALL_OFFER_TENDER_SUCCESS", data.data.offers);
      if (data.data?.user_offer)
        commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data.user_offer);
      commit(GET_A_TENDER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_A_TENDER_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
  async [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch("GET_ALL_TENDER_ASYNC");
  },
};
