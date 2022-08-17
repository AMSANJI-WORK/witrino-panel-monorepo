<template>
  <v-sheet class="transparent">
    <pages-description />
    <barter-filters />
  </v-sheet>
</template>

<script>
import barterFilters from "@polotik/modules/Barter/Components/Filters.vue";
import PagesDescription from "@polotik/modules/Barter/Components/PagesDescription.vue";
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
