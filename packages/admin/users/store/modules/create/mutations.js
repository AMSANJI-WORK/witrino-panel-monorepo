import Vue from "vue";
import router from "@witrino/router";
import { userTypes } from "@packages/admin/users/store/types";
export default {
  [userTypes.CREATE_USER_SUCCESS](_, payload) {
    router.push("/admin/user");
  },
  [userTypes.CREATE_USER_FAILURE](_, error) {},
};
