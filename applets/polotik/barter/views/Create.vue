<template>
  <v-sheet class="transparent">
    <pages-description />
    <modify-barter />
  </v-sheet>
</template>

<script>
import ModifyBarter from "@applets/polotik/barter/components/Modify.vue";
import Notification from "@applets/commen/card/components/Notification.vue";
import PagesDescription from "@applets/polotik/barter/components/PagesDescription.vue";
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
