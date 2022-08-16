import Vue from "vue";
import router from "@witrino/router";

import { userAddressTypes } from "../../types";
export default {
  [userAddressTypes.UPDATE_USER_ADDRESS_ADDRESS_SUCCESS](_, payload) {
    if (router.currentRoute.path.includes("profile"))
      router.push(`/profile/${router.currentRoute.params.userAddressId}`);
    else router.push("/admin/userAddress");
  },
  [userAddressTypes.UPDATE_USER_ADDRESS_ADDRESS_FAILURE](_, error) {},
};
