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
import PreviewForm from "@applets/polotik/auction/components/Preview.vue";
import auctionLoadingMixin from "@applets/polotik/auction/mixins/loading";
import PagePreviewTypeSecond from "@applets/commen/loading/modules/skeleton/components/PageList/SkeletonTypeSecond.vue";

export default {
  mixins: [auctionLoadingMixin],
  components: {
    PreviewForm,
    PagePreviewTypeSecond,
  },
  created() {
  },
};
</script>

<style lang="scss" scoped></style>
