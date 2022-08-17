import Vue from "vue";
import { zoneTypes } from "@packages/zone/store/types";
export default {
  [zoneTypes.DISABLE_ZONE_SUCCESS](_, payload) {},
  [zoneTypes.DISABLE_ZONE_FAILURE](_, error) {},
};
