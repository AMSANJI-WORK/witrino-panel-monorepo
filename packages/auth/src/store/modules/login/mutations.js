import { authTypes } from "@auth/store/type";

import Vue from "vue";
import router from "@witrino/router";

export default {
  [authTypes.AUTH_LOGIN_SUCCESS]() {
    router.push("/");
  },
  [authTypes.AUTH_LOGIN_FAILURE]() {},
};
