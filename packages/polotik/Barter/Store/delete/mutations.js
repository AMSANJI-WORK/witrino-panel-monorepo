import Vue from "vue";
import { DELETE_BARTER_SUCCESS, DELETE_BARTER_FAILURE } from "./types";
export default {
  [DELETE_BARTER_SUCCESS](state, id) {
    const targetIndex = state.barterList.findIndex((barter) => barter.id === id);
    if (!targetIndex) Vue.$toast.error("این درخواست یافت نشد");
    state.barterList.splice(targetIndex, 1);
    Vue.$toast.success("این درخواست با موفقیت حذف شد");
  },
  [DELETE_BARTER_FAILURE](_, error) {
    Vue.$toast.error("حذف این آیتم با خطا مواجه شد");
    console.log(error);
  },
};
