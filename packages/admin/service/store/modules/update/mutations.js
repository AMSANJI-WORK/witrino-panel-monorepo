import Vue from "vue";
import router from "@witrino/router";

import { serviceTypes } from "@packages/admin/service/store/types";
export default {
  [serviceTypes.UPDATE_SERVICE_SUCCESS](_, payload) {},
  [serviceTypes.UPDATE_SERVICE_FAILURE](_, error) {},
};
