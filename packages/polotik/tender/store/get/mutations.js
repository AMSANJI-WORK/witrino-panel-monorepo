import Vue from "vue";
import {
  // get all methods
  GET_ALL_TENDER_SUCCESS,
  GET_ALL_TENDER_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_A_TENDER_SUCCESS,
  GET_A_TENDER_FAILURE,
} from "./types";
export default {
  [GET_ALL_TENDER_SUCCESS](state, payload) {
    state.tenderList = [...payload.data];
  },
  [GET_ALL_TENDER_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [GET_A_TENDER_SUCCESS](state, payload) {
    state.tender = Object.assign({}, payload.data);
  },

  [GET_A_TENDER_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [CHANGE_PAGE_PAGINATION](state, payload) {
    state.pagination.page = payload;
  },
};
