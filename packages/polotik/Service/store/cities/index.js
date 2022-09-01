import Vue from "vue";
import {
  GET_ALL_CITIES_ASYNC,
  GET_ALL_CITIES_SUCCESS,
  GET_ALL_CITIES_FAILURE,
  //   GET_A_CITY_ASYNC,
  //   GET_A_CITY_SUCCESS,
  //   GET_A_CITY_FAILURE,
} from "./types";
import RepositoryFactory from "@polotik/repositories/factory";
const cityRepository = RepositoryFactory.get("city");

export default {
  namespaced: true,
  state: () => ({
    cities: [],
    city: {},
  }),
  getters: {
    cities(state) {
      return state.cities;
    },
    city(state) {
      return state.city;
    },
  },
  mutations: {
    [GET_ALL_CITIES_SUCCESS](state, payload) {
      state.cities = payload;
      console.log("cities get");
    },
    [GET_ALL_CITIES_FAILURE](_, payload) {
      Vue.$toast.error("دریافت دسته بندی ها با خطا مواجه شد");
      console.log(payload);
    },
  },
  actions: {
    async [GET_ALL_CITIES_ASYNC]({ commit, getters }) {
      try {
        commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
        if (getters.cities.length == 0) {
          const { data } = await cityRepository.getAllCities();
          commit(GET_ALL_CITIES_SUCCESS, data);
        } else commit(GET_ALL_CITIES_SUCCESS, getters.cities);
      } catch (error) {
        commit(GET_ALL_CITIES_FAILURE, error);
      } finally {
        commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      }
    },
  },
};
