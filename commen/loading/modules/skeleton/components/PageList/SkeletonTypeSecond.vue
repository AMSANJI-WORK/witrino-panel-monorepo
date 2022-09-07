<template>
  <v-sheet class="transparent mx-2">
    <v-card
      class="rounded-lg d-flex flex-wrap align-center justify-sm-space-around"
      elevation="3"
    >
      <v-col
        cols="12"
        v-for="itemHeader in 4"
        :key="itemHeader"
        class="py-0 d-flex flex-wrap align-center justify-sm-space-around"
      >
        <v-col cols="12" v-if="itemHeader != 0 || itemHeader != 4">
          <v-divider class="my-3"></v-divider>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          v-for="itemDetail in 6"
          :key="itemDetail"
          class="py-0"
        >
          <v-skeleton-loader
            v-bind="attrs"
            type="list-item"
          ></v-skeleton-loader>
        </v-col>
      </v-col>
    </v-card>
  </v-sheet>
</template>

<script>
import SkeletonLoaderMixin from "../../mixins/skeleton";
export default {
  mixins: [SkeletonLoaderMixin],
};
</script>

<style lang="scss" scoped></style>
