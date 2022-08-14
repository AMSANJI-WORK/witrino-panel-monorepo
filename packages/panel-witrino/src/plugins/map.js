import Vue from "vue";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

const lmap = Vue.component("l-map", LMap);
const ltilelayer = Vue.component("l-tile-layer", LTileLayer);
const lmarker = Vue.component("l-marker", LMarker);

export { lmap, ltilelayer, lmarker };
