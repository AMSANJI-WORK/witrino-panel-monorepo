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
  async [GET_ALL_SALE_ASYNC]({ commit, rootGetters, getters }, payload) {
    let loadingType =
      getters.saleList.length == 0
        ? "loading/TOGGLE_SKELETON_LOADING_LIST"
        : "loading/TOGGLE_SKELETON_LOADING_MENU";
    try {
      commit(loadingType, {}, { root: true });
      let paginationSelfItem = rootGetters["pagination/paginationSelfItem"];
      let pagination = rootGetters["pagination/pagination"];
      if (payload) {
        const { data } = await guildsRepository.getsaleList({
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
        commit(GET_ALL_SALE_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getsaleList({
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
      setTimeout(() => {
        commit(loadingType, {}, { root: true });
      }, 1000);
    }
  },
  async [GET_A_SALE_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      commit("loading/TOGGLE_SKELETON_LOADING_ONE", {}, { root: true });
      const { data } = await guildsRepository.getASale(payload);
      commit(GET_A_SALE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_A_SALE_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      setTimeout(() => {
        commit("loading/TOGGLE_SKELETON_LOADING_ONE", {}, { root: true });
      }, 1000);
    }
  },
};
