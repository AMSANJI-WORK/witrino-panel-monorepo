import { mapActions, mapGetters } from "vuex";
import { zoneTypes } from "@commen/zone/store/types";
const ZoneMixin = {
  computed: {
    ...mapGetters("shared/zone", ["zone", "zoneList"]),
  },
  methods: {
    ...mapActions("shared/zone", {
      updateZone: `update/${zoneTypes.UPDATE_ZONE_ASYNC}`,
      getOneZone: `get/${zoneTypes.GET_ALL_ZONE_ASYNC}`,
      getAllZone: `get/${zoneTypes.GET_ONE_ZONE_ASYNC}`,
      createZone: `create/${zoneTypes.CREATE_ZONE_ASYNC}`,
      disableZone: `disable/${zoneTypes.DELETE_ZONE_ASYNC}`,
    }),
  },
};
export default ZoneMixin;
