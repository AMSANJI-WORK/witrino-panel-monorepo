<template>
  <v-sheet class="transparent mx-2 rounded-lg">
    <v-col cols="12" v-for="product in 4" :key="product">
      <v-card class="rounded-lg" elevation="4">
        <v-skeleton-loader v-bind="attrs" type="article"></v-skeleton-loader>
        <v-card-actions class="pa-0">
          <v-col sm="2" md="3" v-for="chip in 2" :key="chip">
            <v-skeleton-loader v-bind="attrs" type="text"></v-skeleton-loader>
          </v-col>

          <v-spacer></v-spacer>
          <v-skeleton-loader v-bind="attrs" type="actions"></v-skeleton-loader>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-sheet>
</template>

<script>
import SkeletonLoaderMixin from "@polotik/modules/loading/mixins/skeleton";
export default {
  mixins: [SkeletonLoaderMixin],
};
</script>

<style lang="scss" scoped></style>
