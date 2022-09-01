import Vue from "vue";
import {
  GET_ALL_CATEGORIES_ASYNC,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  //   GET_A_CATEGORY_ASYNC,
  //   GET_A_CATEGORY_SUCCESS,
  //   GET_A_CATEGORY_FAILURE,
} from "./types";
import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  namespaced: true,
  state: () => ({
    categories: [],
    category: {},
  }),
  getters: {
    categories(state) {
      return state.categories;
    },
    category(state) {
      return state.category;
    },
  },
  mutations: {
    [GET_ALL_CATEGORIES_SUCCESS](state, payload) {
      state.categories = payload;
    },
    [GET_ALL_CATEGORIES_FAILURE](_, payload) {
      Vue.$toast.error("دریافت دسته بندی ها با خطا مواجه شد");
      console.log(payload);
    },
  },
  actions: {
    async [GET_ALL_CATEGORIES_ASYNC]({ commit, getters }, payload) {
      try {
        commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
        if (getters.categories.length == 0) {
          let { data } = await guildsRepository.getAllCategories(
            payload.target
          );
          commit(GET_ALL_CATEGORIES_SUCCESS, data);
        } else commit(GET_ALL_CATEGORIES_SUCCESS, getters.categories);
      } catch (error) {
        commit(GET_ALL_CATEGORIES_FAILURE, error);
      } finally {
        commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      }
    },
  },
};
