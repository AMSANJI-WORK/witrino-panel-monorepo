import Vue from "vue";
import { serviceTypes } from "@packages/admin/service/store/types";
export default {
  [serviceTypes.DELETE_SERVICE_SUCCESS](_, payload) {},
  [serviceTypes.DELETE_SERVICE_FAILURE](_, error) {},
};
