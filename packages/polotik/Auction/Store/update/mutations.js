import { UPDATE_AUCTION_SUCCESS, UPDATE_AUCTION_FAILURE } from "./types";
import Vue from "vue";
export default {
  [UPDATE_AUCTION_SUCCESS](state, payload) {
    const targetIndex = state.auctions.findIndex(
      (auction) => auction.id == payload.id
    );
    if (!targetIndex) Vue.$toast.error("مورد یافت نشد");
    state.auctions[targetIndex] = Object.assign({}, payload);
    Vue.$toast.success("مزایده ها با موفقیت ویرایش شد");
  },
  [UPDATE_AUCTION_FAILURE](_, error) {
    Vue.$toast.error("ویرایش مزایده با خطا مواجه شد");
    console.log(error);
  },
};
