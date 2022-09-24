<template>
  <v-card-title
    class="d-flex flex-wrap justify-sm-start justify-center p-blue-lighten-1 black--text"
  >
    <v-avatar size="80" class="rounded-lg transparent">
      <img v-if="sale.data?.gallery.length > 0" :src="image" alt="alt" />
    </v-avatar>
    <v-sheet
      elevation="0"
      class="d-sm-block d-flex flex-column align-center transparent mr-4 my-2 my-sm-0"
    >
      <div class="">{{ sale.title }}</div>
      <div class="text-subtitle-2 font-weight-regular">
        {{ sale.description }}
      </div>
    </v-sheet>
    <v-spacer></v-spacer>
    <v-btn
      color="primary"
      class="px-sm-7 rounded-lg"
      link
      :to="`/sale/${$route.params.id}/preview`"
      >بیشتر</v-btn
    >
  </v-card-title>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("sale", ["sale"]),
    image() {
      return import.meta.env.VITE_BASE_URL + this.sale.data.gallery[0].src;
    },
  },
};
</script>

<style lang="scss" scoped></style>
