<template>
  <v-sheet class="transparent">
    <pages-description />
    <modify-sale />
  </v-sheet>
</template>

<script>
import ModifySale from "@applets/polotik/sale/components/Modify.vue";
import PagesDescription from "@applets/polotik/sale/components/PagesDescription.vue";
export default {
  components: {
    ModifySale,
    PagesDescription,
  },
  created() {
    
  },
};
</script>

<style lang="scss" scoped></style>
