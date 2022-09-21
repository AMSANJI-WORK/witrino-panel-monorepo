import { CREATE_SUCCESS, CREATE_FAILURE } from "./create.types";
export default {
  [CREATE_SUCCESS](state, payload) {
    state.list = [payload.data, ...state.list];
  },
  [CREATE_FAILURE](_, error) {
    console.log(error);
  },
};
