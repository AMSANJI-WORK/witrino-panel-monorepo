<template>
  <v-sheet class="transparent">
    <pages-description />
    <inquiry-filters />
  </v-sheet>
</template>

<script>
import InquiryFilters from "@polotik/modules/Inquiry/Components/Filters.vue";
import PagesDescription from "@polotik/modules/Inquiry/Components/PagesDescription.vue";
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
