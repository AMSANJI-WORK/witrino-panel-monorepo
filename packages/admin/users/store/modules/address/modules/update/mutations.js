import Vue from "vue";
import router from "@witrino/router";

import { userAddressTypes } from "../../types";
export default {
  [userAddressTypes.UPDATE_USER_ADDRESS_ADDRESS_SUCCESS](_, payload) {
    if (router.currentRoute.path.includes("profile"))
      router.push(`/profile/${router.currentRoute.params.userId}`);
    else router.push("/admin/user");
  },
  [userAddressTypes.UPDATE_USER_ADDRESS_ADDRESS_FAILURE](_, error) {},
};
