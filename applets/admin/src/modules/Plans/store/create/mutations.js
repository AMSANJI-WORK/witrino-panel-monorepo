import Vue from "vue";
import {
  CREATE_INQUIRY_SUCCESS,
  CREATE_INQUIRY_FAILURE,
} from "./types";
export default {
  [CREATE_INQUIRY_SUCCESS](state, payload) {
    state.inquiries = [...state.inquiries, payload.data];
    Vue.$toast.open({
      message: "استعلام جدید با موفقیت ایجاد شد",
      type: "success",
    });
  },
  [CREATE_INQUIRY_FAILURE](_, error) {
    Vue.$toast.open({
      message: "ایجاد استعلام جدید با خطا مواجه شد",
      type: "error",
    });
    console.log(error);
  },
};
