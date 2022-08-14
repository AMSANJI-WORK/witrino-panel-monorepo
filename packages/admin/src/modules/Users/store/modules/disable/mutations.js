import Vue from "vue";
import { userTypes } from "../../types";
export default {
  [userTypes.DISABLE_USER_SUCCESS](_, payload) {},
  [userTypes.DISABLE_USER_FAILURE](_, error) {},
};
