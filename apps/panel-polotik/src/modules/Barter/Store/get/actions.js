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
  async [GET_ALL_BARTER_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const { pagination, selfItemPagination } = rootState;
      if (payload) {
        const { data } = await guildsRepository.getAllBarters({
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
        commit(GET_ALL_BARTER_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllBarters({
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
        commit(GET_ALL_BARTER_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_BARTER_FAILURE, error);
    } finally {
      rootState.fromLoading = false;
    }
  },

  async [GET_A_BARTER_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const { data } = await guildsRepository.getABarter(payload);
      if (data.data?.offers)
      commit("guilds/barter/request/GET_ALL_OFFER_SUCCESS", data.data.offers, {
        root: true,
      });
      commit(GET_A_BARTER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_A_BARTER_FAILURE, error);
    } finally {
      rootState.fromLoading = false;
    }
  },
};
