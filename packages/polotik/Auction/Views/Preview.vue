<template>
  <preview-form />
</template>

<script>
import PreviewForm from "@packages/polotik/Auction/Components/Preview.vue";
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
