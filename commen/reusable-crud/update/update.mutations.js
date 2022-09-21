import { UPDATE_SUCCESS, UPDATE_FAILURE } from "./update.types";
import Vue from "vue";
export default {
  [UPDATE_SUCCESS](state, payload) {
    const targetIndex = state.list.findIndex((item) => item.id == payload.id);
    state.list[targetIndex] = Object.assign({}, payload);
  },
  [UPDATE_FAILURE](_, error) {
    console.log(error);
  },
};
