import Vue from "vue";
import {
  CREATE_OFFER_AUCTION_SUCCESS,
  CREATE_OFFER_AUCTION_FAILURE,
} from "./types";
export default {
  [CREATE_OFFER_AUCTION_SUCCESS](state, payload) {
    state.offers = [...state.offers, payload.data];
    Vue.$toast.success("درخواست شما برای مزایده با موفقیت ایجاد شد");
  },
  [CREATE_OFFER_AUCTION_FAILURE](_, error) {
    Vue.$toast.error("ایجاد درخواست شما برای مزایده با خطا مواجه شد");
    console.log(error);
  },
};
