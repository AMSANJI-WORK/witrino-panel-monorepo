import { UPDATE_TENDER_SUCCESS, UPDATE_TENDER_FAILURE } from "./types";
import Vue from "vue";
export default {
  [UPDATE_TENDER_SUCCESS](state, payload) {
    const targetIndex = state.tenders.findIndex(
      (tender) => tender.id == payload.id
    );
    if (!targetIndex) Vue.$toast.error("مورد یافت نشد");
    state.tenders[targetIndex] = Object.assign({}, payload);
    Vue.$toast.success("مناقصه ها با موفقیت ویرایش شد");
  },
  [UPDATE_TENDER_FAILURE](_, error) {
    Vue.$toast.error("ویرایش مناقصه با خطا مواجه شد");
    console.log(error);
  },
};
