import Vue from "vue";
import { userTypes } from "@packages/admin/users/store/types";
export default {
  [userTypes.DELETE_USER_SUCCESS](_, payload) {},
  [userTypes.DELETE_USER_FAILURE](_, error) {},
};
