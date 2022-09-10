import Vue from "vue";
import { DELETE_SALE_SUCCESS, DELETE_SALE_FAILURE } from "./types";
export default {
  [DELETE_SALE_SUCCESS](state, id) {
    const targetIndex = state.sales.findIndex((sale) => sale.id === id);
    if (targetIndex === -1) Vue.$toast.error("این درخواست یافت نشد");
    state.sales.splice(targetIndex, 1);
  },
  [DELETE_SALE_FAILURE](_, error) {
    Vue.$toast.error("حذف این آیتم با خطا مواجه شد");
    console.log(error);
  },
};
