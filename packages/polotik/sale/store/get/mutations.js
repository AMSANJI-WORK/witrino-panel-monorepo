import Vue from "vue";
import {
  // get all methods
  GET_ALL_SALE_SUCCESS,
  GET_ALL_SALE_FAILURE,
  // get one methods
  GET_A_SALE_SUCCESS,
  GET_A_SALE_FAILURE,
} from "./types";
export default {
  [GET_ALL_SALE_SUCCESS](state, payload) {
    state.sales = [...payload.data];
  },
  [GET_ALL_SALE_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [GET_A_SALE_SUCCESS](state, payload) {
    Object.assign(state.sale, payload.data);
  },
  [GET_A_SALE_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
};
