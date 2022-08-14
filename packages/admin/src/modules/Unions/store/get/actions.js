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

import RepositoryFactory from "@witrino/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_INQUIRY_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const { pagination, selfItemPagination } = rootState;
      if (payload) {
        const { data } = await guildsRepository.getAllInquiries({
          pagination: selfItemPagination,
          unionId: payload.currentUnionId,
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
        commit(GET_ALL_INQUIRY_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllInquiries({
          pagination,
          unionId: null,
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
        commit(GET_ALL_INQUIRY_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_INQUIRY_FAILURE, error);
    } finally {
      rootState.fromLoading = false;
    }
  },
  async [GET_AN_INQUIRY_ASYNC]({ commit, state }, payload) {
    try {
      state.fromLoading = true;
      const { data } = await guildsRepository.getAnInquiry(payload);
      commit(GET_AN_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_AN_INQUIRY_FAILURE, error);
    } finally {
      state.fromLoading = false;
    }
  },
};
