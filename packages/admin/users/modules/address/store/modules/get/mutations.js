import Vue from "vue";
import { userTypes } from "@packages/admin/users/store/types";
export default {
  [userTypes.GET_ALL_USER_ADDRESS_SUCCESS](_, payload) {},
  [userTypes.GET_ALL_USER_ADDRESS_FAILURE](_, error) {},
  [userTypes.GET_ONE_USER_ADDRESS_SUCCESS](_, payload) {},
  [userTypes.GET_ONE_USER_ADDRESS_FAILURE](_, error) {},
};
