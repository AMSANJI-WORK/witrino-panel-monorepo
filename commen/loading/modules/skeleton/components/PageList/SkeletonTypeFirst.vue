<template>
  <v-sheet class="transparent mx-2">
    <v-card class="rounded-lg mb-6">
      <v-skeleton-loader v-bind="attrs" type="article"></v-skeleton-loader>
      <v-card-actions class="pa-0">
        <v-spacer></v-spacer>
        <v-skeleton-loader
          v-bind="attrs"
          type="button"
          class="pa-4"
        ></v-skeleton-loader>
      </v-card-actions>
    </v-card>
    <v-card
      class="rounded-lg d-flex flex-wrap align-center justify-sm-space-around"
      elevation="3"
    >
      <v-col cols="12" sm="6" class="d-block d-sm-none">
        <v-skeleton-loader v-bind="attrs" type="image"></v-skeleton-loader>
      </v-col>
      <v-col cols="12" sm="6">
        <v-skeleton-loader v-bind="attrs" type="article"></v-skeleton-loader>
        <v-skeleton-loader v-bind="attrs" type="article"></v-skeleton-loader>
        <v-skeleton-loader v-bind="attrs" type="article"></v-skeleton-loader>
      </v-col>
      <v-col cols="12" sm="6" class="d-sm-block d-none pa-8">
        <v-skeleton-loader v-bind="attrs" type="image"></v-skeleton-loader>
      </v-col>
    </v-card>
  </v-sheet>
</template>

<script>
import SkeletonLoaderMixin from "../mixins/skeleton";
export default {
  mixins: [SkeletonLoaderMixin],
};
</script>

<style lang="scss" scoped></style>
