<template>
  <v-card class="rounded-lg mx-2" elevation="0">
    <v-sheet class="d-flex flex-wrap mt-3">
      <v-col v-for="n in 2" :key="n" class="pa-2" cols="12" sm="6" md="4">
        <v-skeleton-loader v-bind="attrs" type="text"></v-skeleton-loader>
      </v-col>
    </v-sheet>
    <v-sheet class="d-flex flex-wrap">
      <v-col cols="12" v-for="product in 4" :key="product">
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
};
</script>

<style lang="scss" scoped></style>
