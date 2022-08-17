import Vue from "vue";
import {
  // get all methods
  GET_ALL_AUCTION_SUCCESS,
  GET_ALL_AUCTION_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_AN_AUCTION_SUCCESS,
  GET_AN_AUCTION_FAILURE,
} from "./types";
export default {
  [GET_ALL_AUCTION_SUCCESS](state, payload) {
    state.auctions = [...payload.data];
  },
  [GET_ALL_AUCTION_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [GET_AN_AUCTION_SUCCESS](state, payload) {
    state.auction = Object.assign({}, payload.data);
  },

  [GET_AN_AUCTION_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [CHANGE_PAGE_PAGINATION](state, payload) {
    state.pagination.page = payload;
  },
};
