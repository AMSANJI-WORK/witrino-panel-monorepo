import Vue from "vue";
import { CREATE_BARTER_SUCCESS, CREATE_BARTER_FAILURE } from "./types";
export default {
  [CREATE_BARTER_SUCCESS](state, payload) {
    state.barterList = [...state.barterList, payload];
    Vue.$toast.success("تهاتر جدید با موفقیت ایجاد شد");
  },
  [CREATE_BARTER_FAILURE](_, error) {
    Vue.$toast.error("تهاتر جدید با موفقیت ایجاد شد");
    console.log(error);
  },
};
