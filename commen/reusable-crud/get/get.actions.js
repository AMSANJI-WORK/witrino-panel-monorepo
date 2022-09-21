import {
  GET_ALL_ASYNC,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  CHANGE_PAGE_PAGINATION,
  GET_ONE_ASYNC,
  GET_ONE_SUCCESS,
  GET_ONE_FAILURE,
} from "./get.types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_ASYNC]({ commit, getters }, payload) {
    commit("loading/TOGGLE_TABLE_LOADING");
    try {
      commit(loadingType);
      const { userId, offerUserId, target } = payload;
      const { data } = await guildsRepository.getAllRequest({
        pagination: getters[`${target}/pagination`],
        userId,
        service,
        offerUserId,
      });
      commit(`${target}/SET_PAGINATION`, data);
      commit(GET_ALL_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_TABLE_LOADING");
    }
  },

  async [GET_ONE_ASYNC]({ commit }, payload) {
    commit("loading/TOGGLE_FORM_LOADING");
    try {
      commit(loadingType);
      const { data } = await guildsRepository.getOneRequest(payload, service);
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
