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
      <l-marker :lat-lng="marker"> </l-marker>
    </l-map>
  </v-sheet>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    latLng: {
      type: Array,
      default: [32.4279, -53.688],
    },
  },
  data: () => ({
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 15,
    map: null,
    marker: [32.4279, -53.688],
    currentCenter: [32.4279, -53.688],
  }),
  watch: {
    addressLocation(newValue) {
      console.log(newValue);
    },
  },
  computed: {
    addressLocation() {
      return this.$store.getters["admin/user/address/userAddress"];
    },
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
      this.currentCenter = this.latLng;
      this.markerLatLng = this.latLng;
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
