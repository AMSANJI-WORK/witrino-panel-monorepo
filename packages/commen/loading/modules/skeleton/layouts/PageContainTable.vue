<template>
  <v-sheet class="mx-2 transparent">
    <SkeletonLoaderCard v-if="hasCard" :card-count="cardCount" />
    <SkeletonLoaderTable />
  </v-sheet>
</template>

<script>
import SkeletonLoaderTable from "@shared/modules/SkeletonLoader/components/Table.vue";
import SkeletonLoaderCard from "@shared/modules/SkeletonLoader/components/Card.vue";
export default {
  components: { SkeletonLoaderTable, SkeletonLoaderCard },
  props: {
    hasCard: {
      type: Boolean,
      default: true,
    },
    cardCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
