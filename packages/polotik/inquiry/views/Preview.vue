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
import inquiryLoadingMixin from "@packages/polotik/inquiry/mixins/loading";
import PagePreviewSkeletonTypeFirst from "@commen/loading/modules/skeleton/components/PageList/SkeletonTypeFirst.vue";
import PagesDescription from "@packages/polotik/inquiry/components/PagesDescription.vue";
import PreviewForm from "@packages/polotik/inquiry/components/Preview.vue";
export default {
  mixins: [inquiryLoadingMixin],
  components: {
    PreviewForm,
    PagesDescription,
    PagePreviewSkeletonTypeFirst,
  },
  computed: {
    cities() {
      return this.$store.getters["guilds/services/cities/cities"];
    },
  },
  created() {
    if (this.cities.length == 0)
      this.$store.dispatch("guilds/services/cities/GET_ALL_CITIES_ASYNC");
    this.$store.commit("CHANGE_SERVICE", "inquiry");
  },
};
</script>

<style lang="scss" scoped></style>
