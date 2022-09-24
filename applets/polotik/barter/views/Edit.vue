<template>
  <v-sheet class="transparent">
    <pages-description />
    <modify-barter />
  </v-sheet>
</template>

<script>
import PagesDescription from "@applets/polotik/barter/components/PagesDescription.vue";
import ModifyBarter from "@applets/polotik/barter/components/Modify.vue";
export default {
  components: {
    PagesDescription,
    ModifyBarter,
  },
  created() {
    
  },
};
</script>

<style lang="scss" scoped></style>
