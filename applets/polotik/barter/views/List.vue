<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeleton v-show="skeletonLoading.list" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet v-show="!skeletonLoading.list" class="transparent">
        <PagesDescription />
        <RequestFilters />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import RequestFilters from "@commen/request/components/Filters.vue";
import barterLoadingMixin from "@applets/polotik/barter/mixins/loading";
import PageListSkeleton from "@commen/loading/modules/skeleton/components/PageList/Skeleton.vue";
import PagesDescription from "@applets/polotik/barter/components/PagesDescription.vue";
export default {
  mixins: [barterLoadingMixin],
  components: {
    RequestFilters,
    PagesDescription,
    PageListSkeleton,
  },
  created() {
    
  },
};
</script>

<style lang="scss" scoped></style>
