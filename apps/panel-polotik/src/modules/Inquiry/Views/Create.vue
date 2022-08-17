<template>
  <v-sheet class="transparent">
    <pages-description />
    <modify-inquiry />
  </v-sheet>
</template>

<script>
import ModifyInquiry from "@polotik/modules/Inquiry/Components/Modify.vue"
import PagesDescription from "@polotik/modules/Inquiry/Components/PagesDescription.vue";
export default {
  components: {
    ModifyInquiry,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "inquiry");
  },
};
</script>

<style lang="scss" scoped></style>
