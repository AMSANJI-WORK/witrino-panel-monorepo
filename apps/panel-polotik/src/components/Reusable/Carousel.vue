<template>
  <v-col cols="12" md="6">
    <v-carousel
      v-if="gallery.length > 0"
      hide-delimiters
      style="border-radius: 8px"
      height="420"
    >
      <carousel-item
        v-for="(image, index) in gallery"
        :data-source="image"
        :key="index"
      />
    </v-carousel>
    <v-img
      v-else
      max-height="350"
      :src="require('@polotik/assets/image/png/image-default.png')"
    />
  </v-col>
</template>

<script>
import CarouselItem from "@polotik/components/Reusable/CarouselItem.vue";
export default {
  props: {
    gallery: Array,
  },
  components: {
    CarouselItem,
  },
};
</script>

<style lang="scss" scoped></style>
