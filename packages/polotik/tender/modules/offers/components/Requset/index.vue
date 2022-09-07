<template>
  <v-card class="rounded-lg mx-2">
    <v-card-subtitle class="grey lighten-2 black--text">
      {{ tender.title }}
    </v-card-subtitle>
    <v-card-text>
      <ProductInfo />
      <!-- <TabFilter /> -->
      <ProductRequestList />
    </v-card-text>
  </v-card>
</template>

<script>
// import TabFilter from "./TabFilter.vue";
import ProductInfo from "./ProductInfo.vue";
import ProductRequestList from "./List.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ProductRequestList,
    ProductInfo,
    // TabFilter,
  },
  computed: {
    ...mapGetters("guilds/tender", ["tender"]),
  },
};
</script>

<style lang="scss" scoped></style>
