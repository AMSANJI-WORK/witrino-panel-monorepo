import Vue from "vue";
import { CREATE_AUCTION_SUCCESS, CREATE_AUCTION_FAILURE } from "./types";
export default {
  [CREATE_AUCTION_SUCCESS](state, payload) {
    state.auctions = [...state.auctions, payload.data];
    Vue.$toast.success("مزایده جدید با موفقیت ایجاد شد");
  },
  [CREATE_AUCTION_FAILURE](_, error) {
    Vue.$toast.error("ایجاد مزایده جدید با خطا مواجه شد");
    console.log(error);
  },
};
