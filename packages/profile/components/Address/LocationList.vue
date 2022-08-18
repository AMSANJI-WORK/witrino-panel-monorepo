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
      <!--  -->
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker" :draggable="markerDrageble"> </l-marker>
    </l-map>
  </v-sheet>
</template>

<script>
import { LControl } from "vue2-leaflet";

export default {
  inheritAttrs: false,
  components: {
    LControl,
  },
  props: {
    markerDrageble: {
      type: Boolean,
      default: false,
    },
    lat: {
      type: Number,
      default: 55,
    },
    long: {
      type: Number,
      default: 55,
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      map: null,
      marker: [47.41322, -1.219482],
      currentCenter: [47.41322, -1.219482],
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
  methods: {
    centerUpdate(center) {
      this.currentCenter = center;
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
  },
  created() {
    this.$nextTick(() => {
      this.currentCenter = [this.lat, this.long];
      this.markerLatLng = [this.lat, this.long];
    });
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
