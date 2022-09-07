import Vue from "vue";
import {
  CREATE_OFFER_BARTER_SUCCESS,
  CREATE_OFFER_BARTER_FAILURE,
} from "./types";
export default {
  [CREATE_OFFER_BARTER_SUCCESS](state, payload) {
    state.offers = [...state.offers, payload.data];
    Vue.$toast.success("درخواست شما برای مزایده با موفقیت ایجاد شد");
  },
  [CREATE_OFFER_BARTER_FAILURE](_, error) {
    Vue.$toast.error("ایجاد درخواست شما برای مزایده با خطا مواجه شد");
    console.log(error);
  },
};
