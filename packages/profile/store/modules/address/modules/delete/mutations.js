import Vue from "vue";
import { userTypes } from "@packages/admin/users/store/types";
export default {
  [userTypes.DELETE_USER_ADDRESS_SUCCESS](_, payload) {},
  [userTypes.DELETE_USER_ADDRESS_FAILURE](_, error) {},
};
