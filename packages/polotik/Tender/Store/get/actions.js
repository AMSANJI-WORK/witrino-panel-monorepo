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
  async [GET_ALL_TENDER_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const { pagination, selfItemPagination } = rootState;
      if (payload) {
        const { data } = await guildsRepository.getAllTenders({
          pagination: selfItemPagination,
          userId: payload.currentUserId,
        });
        commit(
          "SET_PAGINATION",
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
          "SET_PAGINATION",
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
      rootState.fromLoading = false;
    }
  },

  async [GET_A_TENDER_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const { data } = await guildsRepository.getATender(payload);
      if (data.data?.offers)
        commit(
          "guilds/tender/request/GET_ALL_OFFER_TENDER_SUCCESS",
          data.data.offers,
          {
            root: true,
          }
        );
      commit(GET_A_TENDER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_A_TENDER_FAILURE, error);
    } finally {
      rootState.fromLoading = false;
    }
  },
  async [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch("GET_ALL_TENDER_ASYNC");
  },
};
