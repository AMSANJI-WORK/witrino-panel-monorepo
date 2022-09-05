<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeleton v-show="skeletonLoading.list" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet v-show="!skeletonLoading.list" class="transparent">
        <PagesDescription />
        <BarterFilters />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import BarterFilters from "@packages/polotik/barter/components/Filters.vue";
import barterLoadingMixin from "@packages/polotik/barter/mixins/loading";
import PageListSkeleton from "@polotik/modules/loading/components/PageListSkeleton.vue";
import PagesDescription from "@packages/polotik/barter/components/PagesDescription.vue";
export default {
  mixins: [barterLoadingMixin],
  components: {
    BarterFilters,
    PagesDescription,
    PageListSkeleton,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "barter");
  },
};
</script>

<style lang="scss" scoped></style>
