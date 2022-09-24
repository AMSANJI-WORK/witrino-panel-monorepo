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
import barterLoadingMixin from "@applets/polotik/barter/mixins/loading";
import PagePreviewSkeletonTypeFirst from "@commen/loading/modules/skeleton/components/PageList/SkeletonTypeFirst.vue";
import PagesDescription from "@applets/polotik/barter/components/PagesDescription.vue";
import PreviewForm from "@applets/polotik/barter/components/Preview.vue";
export default {
  mixins: [barterLoadingMixin],
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
