import {
  UPLOAD_FILE_FAILURE,
  UPLOAD_FILE_SUCCESS,
  DELETE_FILE_SUCCESS,
  DELETE_FILE_FAILURE,
} from "./types";
import Vue from "vue";
import router from "@polotik/router";

export default {
  DELETE_IMAGE(state, payload) {
    state.images.splice(payload, 1);
  },
  ADD_IMAGE(state, payload) {
    state.images = [...new Set(state.images)];
    state.images = [...state.images, ...payload];
  },
  REST_IMAGES(state) {
    state.images = [];
  },
  [DELETE_FILE_SUCCESS](state, payload) {
    state.images.splice(payload, 1);
  },
  [DELETE_FILE_FAILURE](_) {
    Vue.$toast.error("حذف فایل  با خطا مواجه شد");
  },
  [UPLOAD_FILE_FAILURE](_) {
    Vue.$toast.error("ارسال فایل ها با خطا مواجه شد");
  },
  [UPLOAD_FILE_SUCCESS](state, payload) {
    if (router.currentRoute.path.includes("edit")) {
      state.images = [...state.images, ...payload.data];
    } else state.images = [...payload.data];
  },
};
