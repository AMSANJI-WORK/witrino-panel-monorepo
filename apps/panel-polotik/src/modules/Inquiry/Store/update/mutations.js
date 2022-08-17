import { UPDATE_INQUIRY_SUCCESS, UPDATE_INQUIRY_FAILURE } from "./types";
import Vue from "vue";
export default {
  [UPDATE_INQUIRY_SUCCESS](state, payload) {
    const targetIndex = state.inquiries.findIndex(
      (inquiry) => inquiry.id == payload.id
    );
    if (!targetIndex) Vue.$toast.error("مورد یافت نشد");
    state.inquiries[targetIndex] = Object.assign({}, payload);
    Vue.$toast.success("ویرایش استعلام با موفقیت انجام شد");
  },
  [UPDATE_INQUIRY_FAILURE](_, error) {
    Vue.$toast.error("ویرایش استعلام با خطا مواجه شد");
    console.log(error);
  },
};
