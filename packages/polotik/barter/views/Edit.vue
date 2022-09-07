<template>
  <v-sheet class="transparent">
    <pages-description />
    <modify-barter />
  </v-sheet>
</template>

<script>
import PagesDescription from "@packages/polotik/barter/components/PagesDescription.vue";
import ModifyBarter from "@packages/polotik/barter/components/Modify.vue";
export default {
  components: {
    PagesDescription,
    ModifyBarter,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "barter");
  },
};
</script>

<style lang="scss" scoped></style>
