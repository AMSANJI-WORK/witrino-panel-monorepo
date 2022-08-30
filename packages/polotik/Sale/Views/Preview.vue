<template>
  <v-sheet class="transparent">
    <pages-description />
    <preview-form />
  </v-sheet>
</template>

<script>
import PagesDescription from "@packages/polotik/sale/components/PagesDescription.vue";
import PreviewForm from "@packages/polotik/sale/components/Preview.vue";
export default {
  components: {
    PreviewForm,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "sale");
  },
};
</script>

<style lang="scss" scoped></style>
