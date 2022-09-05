<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeleton v-show="skeletonLoading.list" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet class="transparent" v-show="!skeletonLoading.list">
        <PagesDescription />
        <SaleFilters />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import SaleFilters from "@packages/polotik/sale/components/Filters.vue";
import ToggleVisibleMixin from "@polotik/modules/loading/mixins/visible-type";
import PageListSkeleton from "@polotik/modules/loading/components/PageListSkeleton.vue";
import PagesDescription from "@packages/polotik/sale/components/PagesDescription.vue";
export default {
  mixins: [ToggleVisibleMixin],
  components: {
    SaleFilters,
    PageListSkeleton,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "sale");
  },
};
</script>

<style lang="scss" scoped></style>
