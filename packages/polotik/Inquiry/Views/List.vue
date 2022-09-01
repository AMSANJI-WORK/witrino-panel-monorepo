<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeleton v-show="skletonLoding.list" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet v-show="!skletonLoding.list" class="transparent">
        <PagesDescription />
        <InquiryFilters />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import ToggleVisibleMixin from "@polotik/modules/loading/mixins/visible-type";
import PageListSkeleton from "@polotik/modules/loading/components/PageListSkeleton.vue";
import InquiryFilters from "@packages/polotik/inquiry/components/Filters.vue";
import PagesDescription from "@packages/polotik/inquiry/components/PagesDescription.vue";
export default {
  mixins: [ToggleVisibleMixin],
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
