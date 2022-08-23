import Vue from "vue";
import { serviceTypes } from "@packages/admin/service/store/types";
export default {
  [serviceTypes.DISABLE_SERVICE_SUCCESS](_, payload) {},
  [serviceTypes.DISABLE_SERVICE_FAILURE](_, error) {},
};
