import Vue from "vue";
import router from "@witrino/router";
import { userTypes } from "@packages/admin/users/store/types";
export default {
  [userTypes.CREATE_USER_ADDRESS_SUCCESS](_, payload) {
  },
  [userTypes.CREATE_USER_ADDRESS_FAILURE](_, error) {},
};
