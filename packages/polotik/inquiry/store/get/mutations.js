import Vue from "vue";
import {
  // get all methods
  GET_ALL_INQUIRY_SUCCESS,
  GET_ALL_INQUIRY_FAILURE,
  // get one methods
  GET_AN_INQUIRY_SUCCESS,
  GET_AN_INQUIRY_FAILURE,
} from "./types";
export default {
  [GET_ALL_INQUIRY_SUCCESS](state, payload) {
    state.inquiryList = [...payload.data];
  },
  [GET_ALL_INQUIRY_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [GET_AN_INQUIRY_SUCCESS](state, payload) {
    state.inquiry = Object.assign({}, payload.data);
  },
  [GET_AN_INQUIRY_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
};
