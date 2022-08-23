import Vue from "vue";
import router from "@witrino/router";
import { zoneTypes } from "@packages/zone/store/types";

export default {
  [zoneTypes.UPDATE_ZONE_SUCCESS](_, payload) {},
  [zoneTypes.UPDATE_ZONE_FAILURE](_, error) {},
};
