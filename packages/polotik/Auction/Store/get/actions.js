import router from "@polotik/router";
import {
  // get all methods
  GET_ALL_AUCTION_ASYNC,
  GET_ALL_AUCTION_SUCCESS,
  GET_ALL_AUCTION_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_AN_AUCTION_ASYNC,
  GET_AN_AUCTION_SUCCESS,
  GET_AN_AUCTION_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_AUCTION_ASYNC]({ commit, getters }, payload) {
    let loadingType =
      getters.auctionList.length == 0
        ? "skeletonLoading/TOGGLE_SKELETON_LOADING_LIST"
        : "skeletonLoading/TOGGLE_SKELETON_LOADING_MENU";

    try {
      commit(loadingType);
      let paginationSelfItem = getters.pagination.paginationSelfItem;
      let pagination = getters.pagination.pagination;
      if (payload) {
        const { data } = await guildsRepository.getAllAuctions({
          pagination: paginationSelfItem,
          userId: payload.currentUserId,
        });
        commit("pagination/SET_PAGINATION", {
          target: "paginationSelfItem",
          data,
        });
        commit(GET_ALL_AUCTION_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllAuctions({
          pagination,
          userId: null,
        });
        commit("pagination/SET_PAGINATION", {
          target: "pagination",
          data,
        });
        commit(GET_ALL_AUCTION_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_AUCTION_FAILURE, error);
    } finally {
      setTimeout(() => {
        commit(loadingType);
      }, 1000);
    }
  },

  async [GET_AN_AUCTION_ASYNC]({ commit }, payload) {
    let loadingType = router.currentRoute.path.includes("edit")
      ? "formLoading/TOGGLE_FORM_LOADING"
      : "skeletonLoading/TOGGLE_SKELETON_LOADING_ONE";
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getAnAuction(payload);
      if (data.data?.offers)
        commit("request/GET_ALL_OFFER_AUCTION_SUCCESS", data.data.offers);
      if (data.data?.user_offer)
        commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data.user_offer);
      commit(GET_AN_AUCTION_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_AN_AUCTION_FAILURE, error);
    } finally {
      commit(loadingType);
    }
  },
  async [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch("GET_ALL_AUCTION_ASYNC");
  },
};
