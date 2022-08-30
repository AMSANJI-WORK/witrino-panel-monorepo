<template>
  <v-sheet class="transparent">
    <pages-description />
    <sale-filters />
  </v-sheet>
</template>

<script>
import SaleFilters from "@packages/polotik/sale/components/Filters.vue";
import PagesDescription from "@packages/polotik/sale/components/PagesDescription.vue";
export default {
  components: {
    SaleFilters,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "sale");
  },
  
};
</script>

<style lang="scss" scoped></style>
