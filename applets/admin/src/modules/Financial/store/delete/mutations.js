import Vue from "vue";
import {
  DELETE_INQUIRY_SUCCESS,
  DELETE_INQUIRY_FAILURE,
} from "./types";
export default {
  [DELETE_INQUIRY_SUCCESS](state, id) {
    const targetIndex = state.inquiries.findIndex(
      (inquiry) => inquiry.id === id
    );
    if (targetIndex === -1)
      Vue.$toast.open({
        message: "این درخواست یافت نشد",
        type: "error",
      });
    state.inquiries.splice(targetIndex, 1);
    Vue.$toast.open({
      message: "این درخواست با موفقیت حذف شد",
      type: "success",
    });
  },
  [DELETE_INQUIRY_FAILURE](_, error) {
    Vue.$toast.open({
      // message: error,
      message: "حذف این آیتم با خطا مواجه شد",
      type: "error",
    });
    console.log(error);
  },
};
