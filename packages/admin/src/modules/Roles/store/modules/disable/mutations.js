import Vue from "vue";
import { roleTypes } from "../../types";
export default {
  [roleTypes.DISABLE_ROLE_SUCCESS](_, payload) {},
  [roleTypes.DISABLE_ROLE_FAILURE](_, error) {},
};
