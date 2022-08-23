import Vue from "vue";
import router from "@witrino/router";
import { serviceTypes } from "@packages/admin/service/store/types";
export default {
  [serviceTypes.CREATE_SERVICE_SUCCESS](_, payload) {},
  [serviceTypes.CREATE_SERVICE_FAILURE](_, error) {},
};
