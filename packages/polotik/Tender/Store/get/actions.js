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
  async [GET_ALL_TENDER_ASYNC]({ commit, rootGetters }, payload) {
    try {
      commit("loading/TOGGLE_SKELETON_LOADING_LIST", {}, { root: true });
      let selfItemPagination = rootGetters["pagination/selfItemPagination"];
      let pagination = rootGetters["pagination/pagination"];
      if (payload) {
        const { data } = await guildsRepository.getAllTenders({
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
        commit(GET_ALL_TENDER_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllTenders({
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
        commit(GET_ALL_TENDER_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_TENDER_FAILURE, error);
    } finally {
      setTimeout(() => {
        commit("loading/TOGGLE_SKELETON_LOADING_LIST", {}, { root: true });
      }, 1000);
    }
  },

  async [GET_A_TENDER_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      commit("loading/TOGGLE_SKELETON_LOADING_ONE", {}, { root: true });
      const { data } = await guildsRepository.getATender(payload);
      if (data.data?.offers)
        commit(
          "guilds/tender/request/GET_ALL_OFFER_TENDER_SUCCESS",
          data.data.offers,
          {
            root: true,
          }
        );
      if (data.data?.user_offer)
        commit(
          "guilds/tender/request/GET_ALL_USER_OFFER_SUCCESS",
          data.data.user_offer,
          {
            root: true,
          }
        );
      commit(GET_A_TENDER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_A_TENDER_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      setTimeout(() => {
        commit("loading/TOGGLE_SKELETON_LOADING_ONE", {}, { root: true });
      }, 1000);
    }
  },
  async [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch("GET_ALL_TENDER_ASYNC");
  },
};
