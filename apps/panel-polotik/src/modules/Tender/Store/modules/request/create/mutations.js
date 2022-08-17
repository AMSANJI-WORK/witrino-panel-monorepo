import Vue from "vue";
import {
  CREATE_OFFER_TENDER_SUCCESS,
  CREATE_OFFER_TENDER_FAILURE,
} from "./types";
export default {
  [CREATE_OFFER_TENDER_SUCCESS](state, payload) {
    state.offers = [...state.offers, payload.data];
    Vue.$toast.success("درخواست شما برای مناقصه با موفقیت ایجاد شد");
  },
  [CREATE_OFFER_TENDER_FAILURE](_, error) {
    Vue.$toast.error("ایجاد درخواست شما برای مناقصه با خطا مواجه شد");
    console.log(error);
  },
};
