import {
  GET_ALL_ASYNC,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  CHANGE_PAGE_PAGINATION,
  GET_ONE_ASYNC,
  GET_ONE_SUCCESS,
  GET_ONE_FAILURE,
} from "./get.types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [GET_ALL_ASYNC]({ commit }, { service, payload }) {
    try {
      commit("loading/TOGGLE_TABLE_LOADING");
      const { data } = await baseRepository.get(service, payload);
      commit(GET_ALL_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_TABLE_LOADING");
    }
  },

  async [GET_ONE_ASYNC]({ commit }, { service, payload }) {
    try {
      commit("loading/TOGGLE_FORM_LOADING");
      const { data } = await baseRepository.get(service, payload);
      commit(GET_ONE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ONE_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING");
    }
  },
  [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch(GET_ALL_ASYNC);
  },
};
