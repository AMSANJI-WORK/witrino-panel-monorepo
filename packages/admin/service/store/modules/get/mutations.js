import Vue from "vue";
import { serviceTypes } from "@packages/admin/service/store/types";
export default {
  [serviceTypes.GET_ALL_SERVICE_SUCCESS](_, payload) {},
  [serviceTypes.GET_ALL_SERVICE_FAILURE](_, error) {},
  [serviceTypes.GET_ONE_SERVICE_SUCCESS](_, payload) {},
  [serviceTypes.GET_ONE_SERVICE_FAILURE](_, error) {},
};
