import router from "@witrino/router";

import { userTypes } from "@packages/admin/users/store/types";
export default {
  [userTypes.UPDATE_USER_ADDRESS_SUCCESS](_, payload) {
  },
  [userTypes.UPDATE_USER_ADDRESS_FAILURE](_, error) {},
};
