import Vue from "vue";
import { CREATE_AUCTION_SUCCESS, CREATE_AUCTION_FAILURE } from "./types";
export default {
  [CREATE_AUCTION_SUCCESS](state, payload) {
    state.auctionList = [payload.data, ...state.auctionList];
    Vue.$toast.success("مزایده جدید با موفقیت ایجاد شد");
  },
  [CREATE_AUCTION_FAILURE](_, error) {
    Vue.$toast.error("ایجاد مزایده جدید با خطا مواجه شد");
    console.log(error);
  },
};
