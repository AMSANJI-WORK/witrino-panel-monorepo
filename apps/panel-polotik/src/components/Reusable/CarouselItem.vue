<template>
  <v-carousel-item v-if="!DataSource.src" eager>
    <v-card
      class="ma-2 pa-0 rounded-lg"
      outlined
      height="100%"
      max-height="400"
    >
      <v-img :src="getImage(DataSource)" height="100%" max-height="400" eager>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-linear
              color="yellow darken-4"
              indeterminate
              rounded
              height="6"
            ></v-progress-linear>
          </v-row>
        </template>
      </v-img>
    </v-card>
  </v-carousel-item>
  <v-carousel-item v-else eager>
    <v-card
      class="ma-2 pa-0 rounded-lg"
      outlined
      height="100%"
      max-height="400"
    >
      <v-img
        :src="getImageBySrc(DataSource.src)"
        height="100%"
        max-height="400"
        eager
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-linear
              color="yellow darken-4"
              indeterminate
              rounded
              height="6"
            ></v-progress-linear>
          </v-row>
        </template>
      </v-img>
    </v-card>
  </v-carousel-item>
</template>
<script>
export default {
  props: {
    DataSource: [File, Object],
  },
  methods: {
    getImage(image) {
      return URL.createObjectURL(image);
    },
    getImageBySrc(image) {
      if (image.includes("polotik")) return image;
      return import.meta.env.VITE_BASE_URL + image;
    },
  },
};
</script>

<style lang="scss" scoped></style>
