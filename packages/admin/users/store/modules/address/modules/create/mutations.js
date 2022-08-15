import Vue from "vue";
import router from "@witrino/router";
import { userAddressTypes } from "../../types";
export default {
  [userAddressTypes.CREATE_USER_ADDRESS_ADDRESS_SUCCESS](_, payload) {
    router.push("/admin/user");
  },
  [userAddressTypes.CREATE_USER_ADDRESS_ADDRESS_FAILURE](_, error) {},
};
