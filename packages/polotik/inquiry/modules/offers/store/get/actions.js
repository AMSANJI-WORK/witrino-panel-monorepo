import {
  // get all methods
  GET_ALL_OFFER_INQUIRY_ASYNC,
  GET_ALL_OFFER_INQUIRY_SUCCESS,
  GET_ALL_OFFER_INQUIRY_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_ONE_OFFER_INQUIRY_ASYNC,
  GET_ONE_OFFER_INQUIRY_SUCCESS,
  GET_ONE_OFFER_INQUIRY_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_OFFER_INQUIRY_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      let pagination = rootGetters["pagination/pagination"];
      const { data } = await guildsRepository.getAllOffers(
        payload.target,
        payload.id,
        pagination
      );
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
      commit(GET_ALL_OFFER_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ALL_OFFER_INQUIRY_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },

  async [GET_ONE_OFFER_INQUIRY_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      const { data } = await guildsRepository.getAOffer(
        payload.target,
        payload.id
      );
      if (data.data?.offers)
        commit(
          "guilds/inquiry/request/GET_ALL_OFFER_INQUIRY_SUCCESS",
          data.data.offers,
          {
            root: true,
          }
        );
      if (data.data?.user_offer)
        commit(
          "guilds/inquiry/request/GET_ALL_USER_OFFER_SUCCESS",
          data.data.user_offer,
          {
            root: true,
          }
        );
      commit(GET_ONE_OFFER_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_ONE_OFFER_INQUIRY_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
  async [CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(CHANGE_PAGE_PAGINATION, payload);
    dispatch("GET_ALL_OFFER_INQUIRY_ASYNC");
  },
};
