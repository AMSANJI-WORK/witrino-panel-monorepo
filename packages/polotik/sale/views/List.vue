<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeleton v-show="skeletonLoading.list" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet class="transparent" v-show="!skeletonLoading.list">
        <PagesDescription />
        <RequestFilters />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import RequestFilters from "@commen/request/components/Filters.vue";
import saleLoadingMixin from "@packages/polotik/sale/mixins/loading";
import PageListSkeleton from "@commen/loading/modules/skeleton/components/PageList/Skeleton.vue";
import PagesDescription from "@packages/polotik/sale/components/PagesDescription.vue";
export default {
  mixins: [saleLoadingMixin],
  components: {
    RequestFilters,
    PageListSkeleton,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "sale");
  },
};
</script>

<style lang="scss" scoped></style>
