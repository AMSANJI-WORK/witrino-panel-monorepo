<template>
  <v-sheet class="transparent">
    <pages-description />
    <inquiry-filters />
  </v-sheet>
</template>

<script>
import InquiryFilters from "@packages/polotik/inquiry/components/Filters.vue";
import PagesDescription from "@packages/polotik/inquiry/components/PagesDescription.vue";
export default {
  components: {
    InquiryFilters,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "inquiry");
  },
  
};
</script>

<style lang="scss" scoped></style>
