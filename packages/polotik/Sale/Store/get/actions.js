import {
  // get all methods
  GET_ALL_SALE_ASYNC,
  GET_ALL_SALE_SUCCESS,
  GET_ALL_SALE_FAILURE,
  // get one methods
  GET_A_SALE_ASYNC,
  GET_A_SALE_SUCCESS,
  GET_A_SALE_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_SALE_ASYNC]({ commit, rootGetters }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      let selfItemPagination = rootGetters["pagination/selfItemPagination"];
      let pagination = rootGetters["pagination/pagination"];
      if (payload) {
        const { data } = await guildsRepository.getAllSales({
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
        commit(GET_ALL_SALE_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllSales({
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
        commit(GET_ALL_SALE_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_SALE_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
  async [GET_A_SALE_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await guildsRepository.getASale(payload);
      commit(GET_A_SALE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_A_SALE_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
