import Vue from "vue";
import {
  DELETE_OFFER_SUCCESS,
  DELETE_OFFER_FAILURE,
} from "./types";
export default {
  [DELETE_OFFER_SUCCESS](state, id) {
    const targetIndex = state.offers.findIndex(
      (offer) => offer.id === id
    );
    if (targetIndex === -1)
      Vue.$toast.error("مورد یافت نشد");
    state.offers.splice(targetIndex, 1);
    Vue.$toast.success("این مناقصه با موفقیت حذف شد");
  },
  [DELETE_OFFER_FAILURE](_, error) {
    Vue.$toast.error("حذف این مناقصه با خطا مواجه شد");
    console.log(error);
  },
};
