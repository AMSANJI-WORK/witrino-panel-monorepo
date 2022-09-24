import Vue from "vue";
import { CREATE_SUCCESS, CREATE_FAILURE } from "./create.types";
export default {
  [CREATE_SUCCESS](state, payload) {
    state.list = [payload.data, ...state.list];
  },
  [CREATE_FAILURE](_, error) {
    Vue.$toast.error("ایجاد آگهی جدید با خطا مواجه شد");
    console.log(error);
  },
};
