import {
  UPLOAD_FILE_FAILURE,
  UPLOAD_FILE_SUCCESS,
  DELETE_FILE_SUCCESS,
  DELETE_FILE_FAILURE,
} from "./types";
import Vue from "vue";

export default {
  DELETE_IMAGE(state, payload) {
    state.images.splice(payload, 1);
    Vue.$toast.open({
      message: "حذف فایل  با موفقیت انجام شد",
      type: "success",
    });
  },
  ADD_IMAGE(state, payload) {
    console.log("ADD_IMAGE");
    state.images = [...new Set(state.images)];
    state.images = [...state.images, ...payload];
  },
  REST_IMAGES(state) {
    state.images = [];
  },
  [DELETE_FILE_SUCCESS](state, payload) {
    state.images.splice(payload, 1);
    Vue.$toast.open({
      message: "حذف فایل  با موفقیت انجام شد",
      type: "success",
    });
  },
  [DELETE_FILE_FAILURE](_) {
    Vue.$toast.open({
      message: "حذف فایل  با خطا مواجه شد",
      type: "error",
    });
  },
  [UPLOAD_FILE_FAILURE](_) {
    Vue.$toast.open({
      message: "ارسال فایل ها با خطا مواجه شد",
      type: "error",
    });
  },
  [UPLOAD_FILE_SUCCESS](state, payload) {
    state.images = [...state.images, ...payload.data];
    Vue.$toast.open({
      message: "ارسال فایل ها با موفقیت انجام شد",
      type: "success",
    });
  },
};
