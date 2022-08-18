<template>
  <v-sheet class="transparent">
    <pages-description />
    <inquiry-filters />
  </v-sheet>
</template>

<script>
import InquiryFilters from "@packages/polotik/Inquiry/Components/Filters.vue";
import PagesDescription from "@packages/polotik/Inquiry/Components/PagesDescription.vue";
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
