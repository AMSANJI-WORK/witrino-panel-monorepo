import Vue from "vue";
import {
  GET_ALL_OFFER_AUCTION_SUCCESS,
  GET_ALL_OFFER_AUCTION_FAILURE,
  CHANGE_PAGE_PAGINATION,
  GET_ALL_USER_OFFER_SUCCESS,
  GET_AN_OFFER_AUCTION_SUCCESS,
  GET_AN_OFFER_AUCTION_FAILURE,
} from "./types";
export default {
  [GET_ALL_OFFER_AUCTION_SUCCESS](state, payload) {
    const { count, last_page, page, data } = payload;

    state.offers = [...data];
    state.pagination.page = page;
    state.pagination.lastPage = last_page;
    state.pagination.size = 5;
    state.pagination.recordCount = count;
  },
  [GET_ALL_USER_OFFER_SUCCESS](state, payload) {
    state.userOffers = [...payload];
  },
  [GET_ALL_OFFER_AUCTION_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [GET_AN_OFFER_AUCTION_SUCCESS](state, payload) {
    state.offer = Object.assign({}, payload.data);
  },

  [GET_AN_OFFER_AUCTION_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [CHANGE_PAGE_PAGINATION](state, payload) {
    state.pagination.page = payload;
  },
};
