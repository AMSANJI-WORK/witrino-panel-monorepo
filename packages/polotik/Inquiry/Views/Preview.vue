<template>
  <v-sheet class="transparent">
    <pages-description />
    <preview-form />
  </v-sheet>
</template>

<script>
import PagesDescription from "@packages/polotik/inquiry/components/PagesDescription.vue";
import PreviewForm from "@packages/polotik/inquiry/components/Preview.vue";
export default {
  components: {
    PreviewForm,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "inquiry");
  },
};
</script>

<style lang="scss" scoped></style>
