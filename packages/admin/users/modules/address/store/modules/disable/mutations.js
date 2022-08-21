import Vue from "vue";
import { userTypes } from "@packages/admin/users/store/types";
export default {
  [userTypes.DISABLE_USER_ADDRESS_SUCCESS](_, payload) {},
  [userTypes.DISABLE_USER_ADDRESS_FAILURE](_, error) {},
};
