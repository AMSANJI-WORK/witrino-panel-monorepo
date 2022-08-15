import Vue from "vue";
import router from "@witrino/router";

import { userTypes } from "../../types";
export default {
  [userTypes.UPDATE_USER_SUCCESS](_, payload) {
    if (router.currentRoute.path.includes("profile"))
      router.push(`/profile/${router.currentRoute.params.userId}`);
    else router.push("/admin/user");
  },
  [userTypes.UPDATE_USER_FAILURE](_, error) {},
};
