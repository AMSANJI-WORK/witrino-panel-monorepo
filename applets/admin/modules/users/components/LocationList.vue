<template>
  <v-sheet class="transparent">
    <l-map
      ref="myMap"
      style="height: 150px"
      @ready="doSomethingOnReady"
      :zoom="zoom"
      :center="center"
      class="product-map"
    >
      <!--  -->
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"> </l-marker>
    
  </v-sheet>
</template>

<script>
import { LControl } from "vue2-leaflet";

export default {
  components: {
    LControl,
  },
  props: ["lat", "long"],
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159],
      map: null,
    };
  },
  methods: {
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
