import Vue from "vue";
import {
  // get all methods
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  CHANGE_PAGE_PAGINATION,
  // get one methods
  GET_ONE_SUCCESS,
  GET_ONE_FAILURE,
} from "./get.types";
export default {
  [GET_ALL_SUCCESS](state, payload) {
    state.list = [...payload.data];
  },
  [GET_ALL_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [GET_ONE_SUCCESS](state, payload) {
    state.item = Object.assign({}, payload.data);
  },

  [GET_ONE_FAILURE](_, error) {
    Vue.$toast.error("دریافت اطلاعات با خطا مواجه شد");
    console.log(error);
  },
  [CHANGE_PAGE_PAGINATION](state, payload) {
    state.pagination.page = payload;
  },
};
