import Vue from "vue";
import { GET_A_USER_SUCCESS, GET_A_USER_FAILURE } from "./types";
export default {
  [GET_A_USER_SUCCESS](state, payload) {
    const { data, message } = payload;
    Object.assign(state.user, data[0]);
  },
  [GET_A_USER_FAILURE](_, error) {
    Vue.$toast.error({
      message: "دریافت اطلاعات با خطا مواجه شد",
    });
    console.log(error);
  },
};
