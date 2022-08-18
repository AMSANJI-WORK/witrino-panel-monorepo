import Vue from "vue";
import { CREATE_SALE_SUCCESS, CREATE_SALE_FAILURE } from "./types";
export default {
  [CREATE_SALE_SUCCESS](state, payload) {
    state.sales = [...state.sales, payload.data];
    Vue.$toast.success("حراجی جدید با موفقیت ایجاد شد");
  },
  [CREATE_SALE_FAILURE](_, error) {
    Vue.$toast.error("ایجاد حراجی جدید با خطا مواجه شد");
    console.log(error);
  },
};
