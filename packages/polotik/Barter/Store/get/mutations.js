import Vue from "vue";
import {
  // get all methods
  GET_ALL_BARTER_SUCCESS,
  GET_ALL_BARTER_FAILURE,
  // get one methods
  GET_A_BARTER_SUCCESS,
  GET_A_BARTER_FAILURE,
} from "./types";
export default {
  [GET_ALL_BARTER_SUCCESS](state, payload) {
    state.barterList = [...payload.data];
  },
  [GET_ALL_BARTER_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [GET_A_BARTER_SUCCESS](state, payload) {
    state.barter = Object.assign({}, payload.data);
  },
  [GET_A_BARTER_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
};
