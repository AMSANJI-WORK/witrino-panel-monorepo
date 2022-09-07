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
    <v-sheet class="rounded-lg" elevation="3">
      <v-sheet class="rounded-lg d-flex align-center ml-3">
        <v-skeleton-loader v-bind="attrs" type="actions"> </v-skeleton-loader>
        <v-spacer></v-spacer>
        <v-skeleton-loader v-bind="attrs" type="button"> </v-skeleton-loader>
      </v-sheet>
      <v-skeleton-loader v-bind="attrs" type="divider"> </v-skeleton-loader>
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
              type="actions"
            ></v-skeleton-loader>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-sheet>
  </v-sheet>
</template>

<script>
import SkeletonLoaderMixin from "../../mixins/skeleton";
export default {
  mixins: [SkeletonLoaderMixin],
};
</script>

<style lang="scss" scoped></style>
