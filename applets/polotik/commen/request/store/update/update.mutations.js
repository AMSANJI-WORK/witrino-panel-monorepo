import { UPDATE_SUCCESS, UPDATE_FAILURE } from "./update.types";
import Vue from "vue";
export default {
  [UPDATE_SUCCESS](state, payload) {
    const targetIndex = state.list.findIndex(
      (item) => item.id == payload.id
    );
    if (!targetIndex) Vue.$toast.error("مورد یافت نشد");
    state.list[targetIndex] = Object.assign({}, payload);
    Vue.$toast.success("مزایده ها با موفقیت ویرایش شد");
  },
  [UPDATE_FAILURE](_, error) {
    Vue.$toast.error("ویرایش مزایده با خطا مواجه شد");
    console.log(error);
  },
};
