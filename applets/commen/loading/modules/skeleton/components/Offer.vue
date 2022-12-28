<template>
  <v-card class="rounded-lg mx-2">
    <v-card-title class="grey lighten-2 my-3">
      <v-col sm="2" md="3">
        <v-skeleton-loader v-bind="attrs" type="text"></v-skeleton-loader>
      </v-col>
      <v-spacer></v-spacer>
      <v-skeleton-loader v-bind="attrs" type="button"></v-skeleton-loader>
    </v-card-title>
    <v-sheet class="d-flex flex-wrap">
      <v-col v-for="n in 2" :key="n" class="pa-2" cols="12" sm="6" md="4">
        <v-skeleton-loader v-bind="attrs" type="text"></v-skeleton-loader>
      </v-col>
    </v-sheet>
    <v-sheet class="d-flex flex-wrap">
      <v-col cols="12" v-for="product in cardNumber" :key="product">
        <v-card class="rounded-lg" elevation="4">
          <v-skeleton-loader v-bind="attrs" type="article"></v-skeleton-loader>
          <v-card-actions class="pa-0">
            <v-col sm="2" md="3" v-for="chip in 2" :key="chip">
              <v-skeleton-loader v-bind="attrs" type="text"></v-skeleton-loader>
            </v-col>

            <v-spacer></v-spacer>
            <v-skeleton-loader
              v-bind="attrs"
              class="ma-2"
              type="button"
            ></v-skeleton-loader>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      attrs: {
        loading: true,
        class: "rounded-lg px-0",
      },
    };
  },
  computed: {
    cardNumber() {
      return this.activePageIsUserOffer ? 1 : 4;
    },
    activePageIsUserOffer() {
      return this.$route.path.includes("outcome");
    },
  },
};
</script>

<style lang="scss" scoped></style>
