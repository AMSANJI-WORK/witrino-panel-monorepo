<template>
  <v-sheet class="transparent">
    <l-map
      v-bind="$attrs"
      ref="myMap"
      @ready="doSomethingOnReady"
      :zoom="zoom"
      :center="currentCenter"
      @update:center="centerUpdate"
      class="product-map"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        :draggable="true"
        :lat-lng="marker"
        @update:latLng="updateMarkerLocation"
      >
      </l-marker>
      <l-control position="bottomleft">
        <v-sheet class="d-flex transparent">
          <v-text-field
            class="rounded-r-lg rounded-l-0"
            dense
            outlined
            :value="lat"
            @input="changeLat($event, 'lat')"
            hide-details
          >
            <template #label>
              <span class="font-weight-bold">lat</span>
            </template>
          </v-text-field>
          <v-text-field
            class="rounded-l-lg rounded-r-0"
            dense
            outlined
            :value="long"
            @input="changeLong($event, 'long')"
            hide-details
          >
            <template #label>
              <span class="font-weight-bold">long</span>
            </template>
          </v-text-field>
        </v-sheet>
      </l-control>
    </l-map>
  </v-sheet>
</template>

<script>
import { LControl } from "vue2-leaflet";

export default {
  inheritAttrs: false,
  components: { LControl },
  props: {
    latLng: {
      type: Array,
      default: [31.50362930577303, 53.61328125000001],
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 4,
      map: null,
      marker: [31.50362930577303, 53.61328125000001],
      currentCenter: [31.50362930577303, 53.61328125000001],
      lat: 31.50362930577303,
      long: 31.50362930577303,
    };
  },
  computed: {
    markerLatLng: {
      get() {
        return this.marker;
      },
      set(value) {
        this.marker = value;
      },
    },
  },
  watch: {
    latLng(newValue) {
      let [lat, long] = newValue;
      this.lat = lat;
      this.long = long;
      this.currentCenter = newValue;
      this.markerLatLng = newValue;
    },
  },
  methods: {
    changeLat(e) {
      this.updateMarkerLocation({ lat: e, lng: this.long });
    },
    changeLong(e) {
      this.updateMarkerLocation({ lat: this.lat, lng: e });
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    updateMarkerLocation(marker) {
      let { lat, lng } = marker;
      this.markerLatLng = [lat, lng];
      this.lat = lat;
      this.long = lng;
      this.$emit("update:location", `${this.markerLatLng.join(", ")}`);
    },
    doSomethingOnReady() {
      this.map = this.$refs["myMap"].mapObject;
      window.dispatchEvent(new Event("resize"));
      this.removeLeafletChip();
    },
    removeLeafletChip() {
      let el = document.getElementsByClassName(
        "leaflet-control-attribution leaflet-control"
      );
      el[0].remove();
    },
    created() {
      this.$nextTick(() => {
        let [lat, long] = this.latLng;
        this.center = this.latLng;
        this.markerLatLng = this.latLng;
        this.lat = lat;
        this.long = long;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.leaflet-control-attribution a {
  display: none;
}
.product-map {
  border-radius: 0.8rem;
  z-index: 1;
}
:deep(.v-text-field--outlined > .v-input__control > .v-input__slot) {
  background: #f6f6f6;
  font-size: 13px;
}
</style>
