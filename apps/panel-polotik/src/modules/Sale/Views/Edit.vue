<template>
  <v-sheet class="transparent">
    <pages-description />
    <modify-sale />
  </v-sheet>
</template>

<script>
import ModifySale from "@polotik/modules/Sale/Components/Modify.vue";
import PagesDescription from "@polotik/modules/Sale/Components/PagesDescription.vue";
export default {
  components: {
    ModifySale,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "sale");
  },
};
</script>

<style lang="scss" scoped></style>
