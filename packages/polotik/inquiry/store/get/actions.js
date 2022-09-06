import router from "@polotik/router";

import {
  // get all methods
  GET_ALL_INQUIRY_ASYNC,
  GET_ALL_INQUIRY_SUCCESS,
  GET_ALL_INQUIRY_FAILURE,
  // get one methods
  GET_AN_INQUIRY_ASYNC,
  GET_AN_INQUIRY_SUCCESS,
  GET_AN_INQUIRY_FAILURE,
} from "./types";
import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_INQUIRY_ASYNC]({ commit, getters }, payload) {
    let loadingType =
      getters.inquiryList.length == 0
        ? "skeletonLoading/TOGGLE_SKELETON_LOADING_LIST"
        : "skeletonLoading/TOGGLE_SKELETON_LOADING_MENU";
    try {
      commit(loadingType);
      let paginationSelfItem = getters["pagination/paginationSelfItem"];
      let paginationSelfOffered = getters["pagination/paginationSelfOffered"];
      let pagination = getters["pagination/pagination"];
      if (payload?.currentUserId) {
        const { data } = await guildsRepository.getAllInquiries({
          pagination: paginationSelfItem,
          userId: payload.currentUserId,
          offerUserId: null,
        });
        commit("pagination/SET_PAGINATION", {
          target: "paginationSelfItem",
          data,
        });

        commit(GET_ALL_INQUIRY_SUCCESS, data);
      } else if (payload?.offerUserId) {
        const { data } = await guildsRepository.getAllInquiries({
          pagination: paginationSelfOffered,
          userId: null,
          offerUserId: payload.offerUserId,
        });
        commit("pagination/SET_PAGINATION", {
          target: "paginationSelfOffered",
          data,
        });
        commit(GET_ALL_INQUIRY_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllInquiries({
          pagination,
          userId: null,
          offerUserId: null,
        });
        commit("pagination/SET_PAGINATION", {
          target: "pagination",
          data,
        });
        commit(GET_ALL_INQUIRY_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_INQUIRY_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
  async [GET_AN_INQUIRY_ASYNC]({ commit }, payload) {
    let loadingType = router.currentRoute.path.includes("edit")
      ? "formLoading/TOGGLE_FORM_LOADING"
      : "skeletonLoading/TOGGLE_SKELETON_LOADING_ONE";
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getAnInquiry(payload);
      if (data.data?.offers)
        commit("request/GET_ALL_OFFER_INQUIRY_SUCCESS", data.data.offers);
      if (data.data?.user_offer)
        commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data.user_offer);
      commit(GET_AN_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_AN_INQUIRY_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
};
