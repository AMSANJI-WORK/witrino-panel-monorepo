<template>
  <v-sheet class="transparent">
    <v-fade-transition>
      <PageContainTable v-if="pageLoading" />
      <List v-else />
    </v-fade-transition>
  </v-sheet>
</template>

<script>
import List from "../components/List.vue";
import PageContainTable from "@shared/modules/SkeletonLoader/layouts/PageContainTable.vue";
import SkeletonLoaderMixin from "@shared/modules/SkeletonLoader/mixins/skeleton-loading";
export default {
  mixins: [SkeletonLoaderMixin],
  components: {
    List,
    PageContainTable,
  },
  created() {
    this.pageReady();
  },
};
</script>

<style lang="scss" scoped></style>
