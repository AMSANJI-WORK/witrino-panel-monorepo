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
import PreviewForm from "@applets/polotik/tender/components/Preview.vue";
import tenderLoadingMixin from "@applets/polotik/tender/mixins/loading";

import PagePreviewTypeSecond from "@commen/loading/modules/skeleton/components/PageList/SkeletonTypeSecond.vue";

export default {
  mixins: [tenderLoadingMixin],
  components: {
    PreviewForm,
    PagePreviewTypeSecond,
  },
  created() {
    
  },
};
</script>

<style lang="scss" scoped></style>
