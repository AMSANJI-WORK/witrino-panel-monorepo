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
  async [GET_ALL_BARTER_ASYNC]({ commit, rootGetters, getters }, payload) {
    let loadingType =
      getters.barterList.length == 0
        ? "loading/TOGGLE_SKELETON_LOADING_LIST"
        : "loading/TOGGLE_SKELETON_LOADING_MENU";
    try {
      commit(loadingType, {}, { root: true });
      let paginationSelfItem = rootGetters["pagination/paginationSelfItem"];
      let pagination = rootGetters["pagination/pagination"];
      if (payload) {
        const { data } = await guildsRepository.getAllBarters({
          pagination: paginationSelfItem,
          userId: payload.currentUserId,
        });
        commit(
          "pagination/SET_PAGINATION",
          {
            target: "paginationSelfItem",
            data: {
              page: data.page,
              last_page: data.last_page,
              count: data.count,
            },
          },
          { root: true }
        );
        commit(GET_ALL_BARTER_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllBarters({
          pagination,
          userId: null,
        });
        commit(
          "pagination/SET_PAGINATION",
          {
            target: "pagination",
            data: {
              page: data.page,
              last_page: data.last_page,
              count: data.count,
            },
          },
          { root: true }
        );
        commit(GET_ALL_BARTER_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_BARTER_FAILURE, error);
    } finally {
      setTimeout(() => {
        commit(loadingType, {}, { root: true });
      }, 1000);
    }
  },

  async [GET_A_BARTER_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      commit("loading/TOGGLE_SKELETON_LOADING_ONE", {}, { root: true });
      const { data } = await guildsRepository.getABarter(payload);
      if (data.data?.offers)
        commit(
          "guilds/barter/request/GET_ALL_OFFER_BARTER_SUCCESS",
          data.data.offers,
          {
            root: true,
          }
        );
      if (data.data?.user_offer)
        commit(
          "guilds/barter/request/GET_ALL_USER_OFFER_SUCCESS",
          data.data.user_offer,
          {
            root: true,
          }
        );
      commit(GET_A_BARTER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_A_BARTER_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      setTimeout(() => {
        commit("loading/TOGGLE_SKELETON_LOADING_ONE", {}, { root: true });
      }, 1000);
    }
  },
};
