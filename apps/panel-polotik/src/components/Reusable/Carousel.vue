<template>
  <v-col cols="12" md="6">
    <v-carousel
      v-if="gallery.length > 0"
      hide-delimiters
      style="border-radius: 8px"
    >
      <v-carousel-item eager v-for="(image, index) in gallery" :key="index">
        <v-img
          :src="getImageBySrc(image.src)"
          height="100%"
          style="object-fit: cover"
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
      </v-carousel-item>
    </v-carousel>
    <v-img
      v-else
      max-height="350"
      style="object-fit: cover"
      :src="require('@commen/assets/image/png/image-default.png')"
    />
  </v-col>
</template>

<script>
export default {
  props: {
    gallery: Array,
  },
  methods: {
    getImageBySrc(image) {
      return import.meta.env.VITE_BASE_URL + image;
    },
  },
};
</script>

<style lang="scss" scoped></style>
