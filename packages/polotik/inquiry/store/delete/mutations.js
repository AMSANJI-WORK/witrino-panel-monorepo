import Vue from "vue";
import { DELETE_INQUIRY_SUCCESS, DELETE_INQUIRY_FAILURE } from "./types";
export default {
  [DELETE_INQUIRY_SUCCESS](state, id) {
    const targetIndex = state.inquiryList.findIndex(
      (inquiry) => inquiry.id === id
    );
    if (targetIndex === -1) Vue.$toast.error("این درخواست یافت نشد");
    state.inquiryList.splice(targetIndex, 1);
  },
  [DELETE_INQUIRY_FAILURE](_, error) {
    Vue.$toast.error("حذف این آیتم با خطا مواجه شد");
    console.log(error);
  },
};
