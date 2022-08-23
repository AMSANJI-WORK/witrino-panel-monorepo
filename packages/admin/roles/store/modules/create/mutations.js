import Vue from "vue";
import router from "@witrino/router";
import { roleTypes } from "@packages/admin/roles/store/types";
export default {
  [roleTypes.CREATE_ROLE_SUCCESS](_, payload) {},
  [roleTypes.CREATE_ROLE_FAILURE](_, error) {},
};
