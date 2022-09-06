import router from "@polotik/router";
import {
  // get all methods
  GET_ALL_BARTER_ASYNC,
  GET_ALL_BARTER_SUCCESS,
  GET_ALL_BARTER_FAILURE,
  // get one methods
  GET_A_BARTER_ASYNC,
  GET_A_BARTER_SUCCESS,
  GET_A_BARTER_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_BARTER_ASYNC]({ commit, getters }, payload) {
    let loadingType =
      getters.barterList.length == 0
        ? "skeletonLoading/TOGGLE_SKELETON_LOADING_LIST"
        : "skeletonLoading/TOGGLE_SKELETON_LOADING_MENU";
    try {
      commit(loadingType);
      let paginationSelfItem = getters["pagination/paginationSelfItem"];
      let pagination = getters["pagination/pagination"];
      if (payload) {
        const { data } = await guildsRepository.getAllBarters({
          pagination: paginationSelfItem,
          userId: payload.currentUserId,
        });
        commit("pagination/SET_PAGINATION", {
          target: "paginationSelfItem",
          data,
        });
        commit(GET_ALL_BARTER_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllBarters({
          pagination,
          userId: null,
        });
        commit("pagination/SET_PAGINATION", {
          target: "pagination",
          data,
        });
        commit(GET_ALL_BARTER_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_BARTER_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },

  async [GET_A_BARTER_ASYNC]({ commit }, payload) {
    let loadingType = router.currentRoute.path.includes("edit")
      ? "formLoading/TOGGLE_FORM_LOADING"
      : "skeletonLoading/TOGGLE_SKELETON_LOADING_ONE";
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getABarter(payload);
      if (data.data?.offers)
        commit("request/GET_ALL_OFFER_BARTER_SUCCESS", data.data.offers);
      if (data.data?.user_offer)
        commit("request/GET_ALL_USER_OFFER_SUCCESS", data.data.user_offer);
      commit(GET_A_BARTER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_A_BARTER_FAILURE, error);
    } finally {
      setTimeout(() => commit(loadingType), 1000);
    }
  },
};
