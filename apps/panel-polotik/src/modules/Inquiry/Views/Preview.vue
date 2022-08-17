<template>
  <v-sheet class="transparent">
    <pages-description />
    <preview-form />
  </v-sheet>
</template>

<script>
import PagesDescription from "@polotik/modules/Inquiry/Components/PagesDescription.vue";
import PreviewForm from "@polotik/modules/Inquiry/Components/Preview.vue";
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
