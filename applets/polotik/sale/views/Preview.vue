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
import saleLoadingMixin from "@applets/polotik/sale/mixins/loading";
import PagePreviewSkeletonTypeFirst from "@commen/loading/modules/skeleton/components/PageList/SkeletonTypeFirst.vue";
import PagesDescription from "@applets/polotik/sale/components/PagesDescription.vue";
import PreviewForm from "@applets/polotik/sale/components/Preview.vue";
export default {
  mixins: [saleLoadingMixin],
  components: {
    PreviewForm,
    PagesDescription,
    PagePreviewSkeletonTypeFirst,
  },
  created() {
    
  },
};
</script>

<style lang="scss" scoped></style>
