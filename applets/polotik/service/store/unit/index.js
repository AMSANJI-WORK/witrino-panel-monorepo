import Vue from "vue";
import {
  GET_ALL_UNITS_ASYNC,
  GET_ALL_UNITS_SUCCESS,
  GET_ALL_UNITS_FAILURE,
  GET_ONE_UNIT_ASYNC,
  GET_ONE_UNITS_SUCCESS,
  GET_ONE_UNITS_FAILURE,
} from "./types";
import RepositoryFactory from "@polotik/repositories/factory";
import formLoading from "@commen/loading/modules/form/store";

const guildsRepository = RepositoryFactory.get("guilds");
export default {
  namespaced: true,
  modules: {
    formLoading,
  },
  state: () => ({
    selectedUnit: {
      id: null,
      name: null,
    },
    units: [],
    unit: {
      id: null,
      name: null,
    },
  }),
  getters: {
    selectedUnit(state) {
      return state.selectedUnit;
    },
    units(state) {
      return state.units;
    },
    unit(state) {
      return state.unit;
    },
  },
  mutations: {
    getSelectedUnit(state, payload) {
      state.selectedUnit = state.units.find((unit) => unit.id === payload);
    },
    [GET_ALL_UNITS_SUCCESS](state, payload) {
      state.units = [...payload];
    },
    [GET_ALL_UNITS_FAILURE]() {
      Vue.$toast.error("دریافت واحد ها با خطا مواجه شد");
    },
    [GET_ONE_UNITS_SUCCESS](state, payload) {
      Object.assign(state.unit, payload);
    },
    [GET_ONE_UNITS_FAILURE]() {
      Vue.$toast.error("دریافت واحد  با خطا مواجه شد");
    },
  },
  actions: {
    async [GET_ALL_UNITS_ASYNC]({ commit, getters }) {
      try {
        commit("formLoading/TOGGLE_FORM_LOADING");
        if (getters.units.length == 0) {
          const { data } = await guildsRepository.getAllUnits();
          commit(GET_ALL_UNITS_SUCCESS, data);
        } else commit(GET_ALL_UNITS_SUCCESS, getters.units);
      } catch (error) {
        commit(GET_ONE_UNITS_FAILURE, error);
      } finally {
        commit("formLoading/TOGGLE_FORM_LOADING");
      }
    },
  },
};
