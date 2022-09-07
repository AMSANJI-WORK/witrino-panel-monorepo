<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PagePreviewTypeSecond v-show="skeletonLoading.one" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet v-show="!skeletonLoading.one" class="transparent">
        <PreviewForm />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import PreviewForm from "@packages/polotik/auction/components/Preview.vue";
import auctionLoadingMixin from "@packages/polotik/auction/mixins/loading";
import PagePreviewTypeSecond from "@commen/loading/modules/skeleton/components/PageList/SkeletonTypeSecond.vue";

export default {
  mixins: [auctionLoadingMixin],
  components: {
    PreviewForm,
    PagePreviewTypeSecond,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "auction");
  },
};
</script>

<style lang="scss" scoped></style>
