import Vue from "vue";
import { zoneTypes } from "@packages/zone/store/types";
export default {
  [zoneTypes.GET_ALL_ZONE_SUCCESS](_, payload) {},
  [zoneTypes.GET_ALL_ZONE_FAILURE](_, error) {},
  [zoneTypes.GET_ONE_ZONE_SUCCESS](_, payload) {},
  [zoneTypes.GET_ONE_ZONE_FAILURE](_, error) {},
};
