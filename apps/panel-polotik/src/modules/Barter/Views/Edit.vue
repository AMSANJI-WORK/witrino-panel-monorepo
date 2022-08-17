<template>
  <v-sheet class="transparent">
    <pages-description />
    <modify-barter />
  </v-sheet>
</template>

<script>
import PagesDescription from "@polotik/modules/Barter/Components/PagesDescription.vue";
import ModifyBarter from "@polotik/modules/Barter/Components/Modify.vue";
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
