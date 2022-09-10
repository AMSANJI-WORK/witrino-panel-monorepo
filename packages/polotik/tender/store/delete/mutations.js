import Vue from "vue";
import { DELETE_TENDER_SUCCESS, DELETE_TENDER_FAILURE } from "./types";
export default {
  [DELETE_TENDER_SUCCESS](state, id) {
    const targetIndex = state.tenderList.findIndex((tender) => tender.id === id);
    if (targetIndex === -1) Vue.$toast.error("مورد یافت نشد");
    state.tenderList.splice(targetIndex, 1);
  },
  [DELETE_TENDER_FAILURE](_, error) {
    Vue.$toast.error("حذف این مناقصه با خطا مواجه شد");
    console.log(error);
  },
};
