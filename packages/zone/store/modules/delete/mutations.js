import Vue from "vue";
import { zoneTypes } from "@packages/zone/store/types";
export default {
  [zoneTypes.DELETE_ZONE_SUCCESS](_, payload) {},
  [zoneTypes.DELETE_ZONE_FAILURE](_, error) {},
};