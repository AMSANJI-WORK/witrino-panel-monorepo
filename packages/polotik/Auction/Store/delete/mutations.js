import Vue from "vue";
import { DELETE_AUCTION_SUCCESS, DELETE_AUCTION_FAILURE } from "./types";
export default {
  [DELETE_AUCTION_SUCCESS](state, id) {
    const targetIndex = state.auctionList.findIndex(
      (auction) => auction.id === id
    );
    if (targetIndex === -1)
      Vue.$toast.error("مورد یافت نشد");
    state.auctionList.splice(targetIndex, 1);
    Vue.$toast.success("این مزایده با موفقیت حذف شد");
  },
  [DELETE_AUCTION_FAILURE](_, error) {
    Vue.$toast.error("حذف این مزایده با خطا مواجه شد");
    console.log(error);
  },
};
