<template>
  <v-sheet class="transparent">
    <pages-description />
    <preview-form />
  </v-sheet>
</template>

<script>
import PagesDescription from "@polotik/modules/Sale/Components/PagesDescription.vue";
import PreviewForm from "@polotik/modules/Sale/Components/Preview.vue";
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
