import Vue from "vue";
import { CREATE_TENDER_SUCCESS, CREATE_TENDER_FAILURE } from "./types";
export default {
  [CREATE_TENDER_SUCCESS](state, payload) {
    state.tenderList = [...state.tenderList, payload.data];
    Vue.$toast.success("مناقصه جدید با موفقیت ایجاد شد");
  },
  [CREATE_TENDER_FAILURE](_, error) {
    Vue.$toast.error("ایجاد مناقصه جدید با خطا مواجه شد");
    console.log(error);
  },
};
