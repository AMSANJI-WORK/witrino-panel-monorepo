import actions from "./actions";
import { authTypes } from "@auth/store/type";
import Vue from "vue";
export default {
  namespaced: true,
  actions,
  mutations: {
    [authTypes.AUTH_LOGOUT]() {
      Vue.$toast.success("شما با موفقیت خارج شدید");
    },
  },
};
