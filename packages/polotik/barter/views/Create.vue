<template>
  <v-sheet class="transparent">
    <pages-description />
    <modify-barter />
  </v-sheet>
</template>

<script>
import ModifyBarter from "@packages/polotik/barter/components/Modify.vue";
import Notification from "@commen/card/components/Notification.vue";
import PagesDescription from "@packages/polotik/barter/components/PagesDescription.vue";
export default {
  components: {
    ModifyBarter,
    Notification,
    PagesDescription,
  },
  created() {
    
  },
};
</script>

<style lang="scss" scoped></style>
