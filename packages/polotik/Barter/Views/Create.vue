<template>
  <v-sheet class="transparent">
    <pages-description />
    <modify-barter />
  </v-sheet>
</template>

<script>
import ModifyBarter from "@packages/polotik/Barter/Components/Modify.vue";
import Notification from "@polotik/components/App/Notification.vue";
import PagesDescription from "@packages/polotik/Barter/Components/PagesDescription.vue";
export default {
  components: {
    ModifyBarter,
    Notification,
    PagesDescription,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "barter");
  },
};
</script>

<style lang="scss" scoped></style>
