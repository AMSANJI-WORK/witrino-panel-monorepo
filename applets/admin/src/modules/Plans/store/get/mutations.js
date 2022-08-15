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
    state.inquiries = [...payload.data];
    Vue.$toast.open({
      message: "استعلام ها با موفقیت دریافت شد",
      type: "success",
    });
  },
  [GET_ALL_INQUIRY_FAILURE](_, error) {
    Vue.$toast.open({
      message: "دریافت اطلاعات با خطا مواجه شد",
      type: "error",
    });
    console.log(error);
  },
  [GET_AN_INQUIRY_SUCCESS](state, payload) {
    state.inquiry = Object.assign({}, payload.data);
    Vue.$toast.open({
      message: "استعلام  با موفقیت دریافت شد",
      type: "success",
    });
  },
  [GET_AN_INQUIRY_FAILURE](_, error) {
    Vue.$toast.open({
      message: "دریافت اطلاعات با خطا مواجه شد",
      type: "error",
    });
    console.log(error);
  },
};
