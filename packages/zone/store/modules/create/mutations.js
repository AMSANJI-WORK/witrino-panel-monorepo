import { zoneTypes } from "@packages/zone/store/types";
export default {
  [zoneTypes.CREATE_ZONE_SUCCESS](_, payload) {},
  [zoneTypes.CREATE_ZONE_FAILURE](_, error) {},
};
