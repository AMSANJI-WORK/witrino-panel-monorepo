import { mapActions, mapGetters } from "vuex";
import { zoneTypes } from "../store/types";
const ZoneMixin = {
  computed: {
    ...mapGetters("shared/zone", {
      zone: "item",
      zoneList: "list",
    }),
  },
  methods: {
    ...mapActions("shared/zone", {
      updateZone: zoneTypes.UPDATE_ASYNC,
      getOneZone: zoneTypes.GET_ALL_ASYNC,
      getAllZone: zoneTypes.GET_ONE_ASYNC,
      createZone: zoneTypes.CREATE_ASYNC,
      disableZone: zoneTypes.DELETE_ASYNC,
    }),
  },
};
export default ZoneMixin;
