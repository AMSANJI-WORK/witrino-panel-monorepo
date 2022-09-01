<template>
  <preview-form />
</template>

<script>
import PreviewForm from "@packages/polotik/auction/components/Preview.vue";
export default {
  components: {
    PreviewForm,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "auction");
  },
};
</script>

<style lang="scss" scoped></style>
