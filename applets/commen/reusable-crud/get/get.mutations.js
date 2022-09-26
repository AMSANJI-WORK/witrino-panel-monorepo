import {
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  GET_ONE_SUCCESS,
  GET_ONE_FAILURE,
} from "./get.types";
export default {
  [GET_ALL_SUCCESS](state, payload) {
    state.list = [...payload.data.data];
  },
  [GET_ALL_FAILURE](_, error) {
    console.log(error);
  },
  [GET_ONE_SUCCESS](state, payload) {
    state.item = Object.assign({}, payload.data[0]);
  },

  [GET_ONE_FAILURE](_, error) {
    console.log(error);
  },
};
