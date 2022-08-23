<template>
  <v-sheet class="transparent">
    <pages-description />
    <barter-filters />
  </v-sheet>
</template>

<script>
import barterFilters from "@packages/polotik/Barter/Components/Filters.vue";
import PagesDescription from "@packages/polotik/Barter/Components/PagesDescription.vue";
export default {
  components: {
    barterFilters,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "barter");
  },
};
</script>

<style lang="scss" scoped></style>
