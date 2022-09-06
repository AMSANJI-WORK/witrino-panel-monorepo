import Vue from "vue";
import { CREATE_INQUIRY_SUCCESS, CREATE_INQUIRY_FAILURE } from "./types";
export default {
  [CREATE_INQUIRY_SUCCESS](state, payload) {
    state.inquiryList = [...state.inquiryList, payload.data];
    Vue.$toast.success("استعلام جدید با موفقیت ایجاد شد");
  },
  [CREATE_INQUIRY_FAILURE](_, error) {
    Vue.$toast.error("ایجاد استعلام جدید با خطا مواجه شد");
    console.log(error);
  },
};
