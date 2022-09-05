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
import barterLoadingMixin from "@packages/polotik/barter/mixins/loading";
import PagePreviewSkeletonTypeFirst from "@polotik/modules/loading/components/PagePreviewSkeletonTypeFirst.vue";
import PagesDescription from "@packages/polotik/barter/components/PagesDescription.vue";
import PreviewForm from "@packages/polotik/barter/components/Preview.vue";
export default {
  mixins: [barterLoadingMixin],
  components: {
    PreviewForm,
    PagesDescription,
    PagePreviewSkeletonTypeFirst,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "barter");
  },
};
</script>

<style lang="scss" scoped></style>
