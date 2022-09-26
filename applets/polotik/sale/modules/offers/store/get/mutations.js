import Vue from "vue";
import {
  // get all methods
  GET_ALL_OFFER_SUCCESS,
  GET_ALL_OFFER_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_ONE_OFFER_SUCCESS,
  GET_ONE_OFFER_FAILURE,
} from "./types";
export default {
  [GET_ALL_OFFER_SUCCESS](state, payload) {
    state.offers = [...payload.data];
  },
  [GET_ALL_OFFER_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [GET_ONE_OFFER_SUCCESS](state, payload) {
    state.offer = Object.assign({}, payload.data);
  },

  [GET_ONE_OFFER_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [CHANGE_PAGE_PAGINATION](state, payload) {
    state.pagination.page = payload;
  },
};
