import Vue from "vue";
import router from "@witrino/router";

import { userTypes } from "@packages/admin/users/store/types";
export default {
  [userTypes.UPDATE_USER_ADDRESS_SUCCESS](_, payload) {
    if (router.currentRoute.path.includes("profile"))
      router.push(`/profile/${router.currentRoute.params.userAddressId}`);
    else router.push("/admin/userAddress");
  },
  [userTypes.UPDATE_USER_ADDRESS_FAILURE](_, error) {},
};
