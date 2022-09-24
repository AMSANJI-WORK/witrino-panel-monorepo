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
      getAllZone: zoneTypes.GET_ALL_ASYNC,
    }),
  },
};
export default ZoneMixin;
