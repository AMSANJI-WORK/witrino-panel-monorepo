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
import RequestFilters from "@applets/polotik/commen/request/components/Filters.vue";
import inquiryLoadingMixin from "@applets/polotik/inquiry/mixins/loading";
import PageListSkeleton from "@commen/loading/modules/skeleton/components/PageList/Skeleton.vue";
import PagesDescription from "@applets/polotik/inquiry/components/PagesDescription.vue";
export default {
  mixins: [inquiryLoadingMixin],
  components: {
    RequestFilters,
    PageListSkeleton,
    PagesDescription,
  },
  created() {
    
  },
};
</script>

<style lang="scss" scoped></style>
