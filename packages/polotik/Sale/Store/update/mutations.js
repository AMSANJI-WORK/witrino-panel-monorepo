import { UPDATE_SALE_SUCCESS, UPDATE_SALE_FAILURE } from "./types";
import Vue from "vue";
export default {
  [UPDATE_SALE_SUCCESS](state, payload) {
    const targetIndex = state.sales.findIndex((sale) => sale.id == payload.id);
    if (!targetIndex) Vue.$toast.error("مورد یافت نشد");
    state.sales[targetIndex] = Object.assign({}, payload);
    Vue.$toast.success("ویرایش حراجی با موفقیت انجام شد");
  },
  [UPDATE_SALE_FAILURE](_, error) {
    Vue.$toast.error("ویرایش حراجی با خطا مواجه شد");
    console.log(error);
  },
};
