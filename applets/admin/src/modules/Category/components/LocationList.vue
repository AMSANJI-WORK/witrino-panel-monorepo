<template>
    <v-sheet class="transparent">
        <l-map
            l-map
            ref="myMap"
            style="height: 300px"
            @ready="doSomethingOnReady()"
            :zoom="zoom"
            :center="center"
            class="product-map"
        >
            <!-- :attribution="attribution" -->
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker :lat-lng="markerLatLng"></l-marker>
        </l-map>
    </v-sheet>
</template>

<script>
export default {
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
            this.markerLatLng = [this.lat, this.long];
            this.center = this.markerLatLng;
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
</style>
