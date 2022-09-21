import { DISABLE_FAILURE, DISABLE_SUCCESS } from "./disable.types";
export default {
  [DISABLE_SUCCESS](state, payload) {
    const targetIndex = state.list.findIndex((item) => item.id == payload);
    state.list.splice(targetIndex, 1);
  },
  [DISABLE_FAILURE](_, error) {},
};
