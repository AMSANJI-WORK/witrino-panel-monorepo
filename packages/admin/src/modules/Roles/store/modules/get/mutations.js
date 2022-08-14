import Vue from "vue";
import { roleTypes } from "../../types";
export default {
  [roleTypes.GET_ALL_ROLE_SUCCESS](_, payload) {},
  [roleTypes.GET_ALL_ROLE_FAILURE](_, error) {},
  [roleTypes.GET_ONE_ROLE_SUCCESS](_, payload) {},
  [roleTypes.GET_ONE_ROLE_FAILURE](_, error) {},
};
