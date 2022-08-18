<template>
  <preview-form />
</template>

<script>
import PreviewForm from "@packages/polotik/Tender/Components/Preview.vue";
export default {
  components: {
    PreviewForm,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "tender");
  },
};
</script>

<style lang="scss" scoped></style>
