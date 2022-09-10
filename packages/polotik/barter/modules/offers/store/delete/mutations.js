import Vue from "vue";
import {
  DELETE_OFFER_BARTER_SUCCESS,
  DELETE_OFFER_BARTER_FAILURE,
} from "./types";
export default {
  [DELETE_OFFER_BARTER_SUCCESS](state, id) {
    const targetIndex = state.offers.findIndex((offer) => offer.id === id);
    if (targetIndex === -1)
      Vue.$toast.error("مورد یافت نشد");
    state.offers.splice(targetIndex, 1);
  },
  [DELETE_OFFER_BARTER_FAILURE](_, error) {
    Vue.$toast.error("حذف این مزایده با خطا مواجه شد");
    console.log(error);
  },
};
