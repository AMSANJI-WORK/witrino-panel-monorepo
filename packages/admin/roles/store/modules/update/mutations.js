import Vue from "vue";
import router from "@witrino/router";

import { roleTypes } from "../../types";
export default {
  [roleTypes.UPDATE_ROLE_SUCCESS](_, payload) {},
  [roleTypes.UPDATE_ROLE_FAILURE](_, error) {},
};
