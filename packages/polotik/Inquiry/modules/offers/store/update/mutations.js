import {
  UPDATE_OFFER_INQUIRY_SUCCESS,
  UPDATE_OFFER_INQUIRY_FAILURE,
} from "./types";
import Vue from "vue";
export default {
  [UPDATE_OFFER_INQUIRY_SUCCESS](state, payload) {
    const targetIndex = state.offers.findIndex(
      (offer) => offer.id === payload.id
    );
    if (!targetIndex)
      Vue.$toast.error( "مورد یافت نشد");
    state.offers[targetIndex] = Object.assign({}, payload);
    Vue.$toast.success("مزایده ها با موفقیت ویرایش شد");
  },
  [UPDATE_OFFER_INQUIRY_FAILURE](_, error) {
    Vue.$toast.error("ویرایش مزایده با خطا مواجه شد");
    console.log(error);
  },
};
