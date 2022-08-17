import Vue from "vue";
import { roleTypes } from "@packages/admin/roles/store/types";
export default {
  [roleTypes.DELETE_ROLE_SUCCESS](_, payload) {},
  [roleTypes.DELETE_ROLE_FAILURE](_, error) {},
};
