import Vue from "vue";
import { DELETE_SUCCESS, DELETE_FAILURE } from "./delete.types";
export default {
  [DELETE_SUCCESS](state, id) {
    const targetIndex = state.list.findIndex(
      (item) => item.id == id
    );
    if (targetIndex === -1) Vue.$toast.error("مورد یافت نشد");
    state.list.splice(targetIndex, 1);
  },
  [DELETE_FAILURE](_, error) {
    Vue.$toast.error("حذف این آیتم با خطا مواجه شد");
    console.log(error);
  },
};
