import { UPDATE_BARTER_SUCCESS, UPDATE_BARTER_FAILURE } from "./types";
import Vue from "vue";
export default {
  [UPDATE_BARTER_SUCCESS](state, payload) {
    const targetIndex = state.barterList.findIndex(
      (barter) => barter.id == payload.id
    );
    if (!targetIndex) Vue.$toast.error("مورد یافت نشد");
    state.barterList[targetIndex] = Object.assign({}, payload);
    Vue.$toast.success("تهاتر با موفقیت ویرایش شد");
  },
  [UPDATE_BARTER_FAILURE](_, error) {
    Vue.$toast.error("ویرایش این آیتم با خطا مواجه شد");
    console.log(error);
  },
};
