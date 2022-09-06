<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PagePreviewSkeletonTypeFirst v-show="skeletonLoading.one" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet v-show="!skeletonLoading.one" class="transparent">
        <PagesDescription />
        <PreviewForm />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import saleLoadingMixin from "@packages/polotik/sale/mixins/loading";
import PagePreviewSkeletonTypeFirst from "@polotik/modules/loading/components/PagePreviewSkeletonTypeFirst.vue";
import PagesDescription from "@packages/polotik/sale/components/PagesDescription.vue";
import PreviewForm from "@packages/polotik/sale/components/Preview.vue";
export default {
  mixins: [saleLoadingMixin],
  components: {
    PreviewForm,
    PagesDescription,
    PagePreviewSkeletonTypeFirst,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "sale");
  },
};
</script>

<style lang="scss" scoped></style>
