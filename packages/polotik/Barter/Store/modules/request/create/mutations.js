import Vue from "vue";
import { CREATE_OFFER_SUCCESS, CREATE_OFFER_FAILURE } from "./types";
export default {
  [CREATE_OFFER_SUCCESS](state, payload) {
    state.offers = [...state.offers, payload.data];
    Vue.$toast.success("مناقصه جدید با موفقیت ایجاد شد");
  },
  [CREATE_OFFER_FAILURE](_, error) {
    Vue.$toast.error("ایجاد مناقصه جدید با خطا مواجه شد");
    console.log(error);
  },
};
