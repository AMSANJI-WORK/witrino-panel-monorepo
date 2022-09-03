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
  async [GET_ALL_AUCTION_ASYNC]({ commit, rootGetters }, payload) {
    try {
      commit("loading/TOGGLE_SKELETON_LOADING_LIST", {}, { root: true });
      let selfItemPagination = rootGetters["pagination/selfItemPagination"];
      let pagination = rootGetters["pagination/pagination"];
      if (payload) {
        const { data } = await guildsRepository.getAllAuctions({
          pagination: selfItemPagination,
          userId: payload.currentUserId,
        });
        commit(
          "pagination/SET_PAGINATION",
          {
            target: "selfItemPagination",
            data: {
              page: data.page,
              last_page: data.last_page,
              count: data.count,
            },
          },
          { root: true }
        );
        commit(GET_ALL_AUCTION_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllAuctions({
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
        commit(GET_ALL_AUCTION_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_AUCTION_FAILURE, error);
    } finally {
      setTimeout(() => {
        commit("loading/TOGGLE_SKELETON_LOADING_LIST", {}, { root: true });
      }, 1000);
    }
  },

  async [GET_AN_AUCTION_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      commit("loading/TOGGLE_SKELETON_LOADING_ONE", {}, { root: true });
      const { data } = await guildsRepository.getAnAuction(payload);
      if (data.data?.offers)
        commit(
          "guilds/auction/request/GET_ALL_OFFER_AUCTION_SUCCESS",
          data.data.offers,
          {
            root: true,
          }
        );
      if (data.data?.user_offer)
        commit(
          "guilds/auction/request/GET_ALL_USER_OFFER_SUCCESS",
          data.data.user_offer,
          {
            root: true,
          }
        );
      commit(GET_AN_AUCTION_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_AN_AUCTION_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      setTimeout(() => {
        commit("loading/TOGGLE_SKELETON_LOADING_ONE", {}, { root: true });
      }, 1000);
    }
  },
  async [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch("GET_ALL_AUCTION_ASYNC");
  },
};
