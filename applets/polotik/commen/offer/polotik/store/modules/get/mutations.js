import Vue from "vue";
import {
  GET_ALL_OFFER_SUCCESS,
  GET_ALL_OFFER_FAILURE,
  CHANGE_PAGE_PAGINATION,
  GET_ALL_USER_OFFER_SUCCESS,
  GET_AN_OFFER_SUCCESS,
  GET_AN_OFFER_FAILURE,
} from "./types";
export default {
  [GET_ALL_OFFER_SUCCESS](state, payload) {
    state.offers = [...payload.data];
  },
  [GET_ALL_USER_OFFER_SUCCESS](state, payload) {
    state.userOffers = [...payload];
  },
  [GET_ALL_OFFER_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [GET_AN_OFFER_SUCCESS](state, payload) {
    state.offer = Object.assign({}, payload.data);
  },

  [GET_AN_OFFER_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [CHANGE_PAGE_PAGINATION](state, payload) {
    state.pagination.page = payload;
  },
};
