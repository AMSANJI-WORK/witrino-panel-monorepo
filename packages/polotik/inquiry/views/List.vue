<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeleton v-show="skeletonLoading.list" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet v-show="!skeletonLoading.list" class="transparent">
        <PagesDescription />
        <InquiryFilters />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import inquiryLoadingMixin from "@packages/polotik/inquiry/mixins/loading";
import PageListSkeleton from "@polotik/modules/loading/components/PageListSkeleton.vue";
import InquiryFilters from "@packages/polotik/inquiry/components/Filters.vue";
import PagesDescription from "@packages/polotik/inquiry/components/PagesDescription.vue";
export default {
  mixins: [inquiryLoadingMixin],
  components: {
    InquiryFilters,
    PageListSkeleton,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "inquiry");
  },
};
</script>

<style lang="scss" scoped></style>
