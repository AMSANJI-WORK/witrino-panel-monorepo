<template>
  <v-sheet rounded="lg" elevation="1" width="100%">
    <content-drawer></content-drawer>
  </v-sheet>
</template>

<script>
import menuItems from "@polotik/constants/menu";
import ContentDrawer from "@polotik/components/Reusable/ContentDrawer.vue";
export default {
  components: { ContentDrawer },
  data() {
    return {
      items: menuItems,
    };
  },
};
</script>
<style lang="scss" scoped>
.boreder--bold {
  border-right: solid 3px #187968;
}
.v-sheet--offset {
  top: 3.3rem;
  position: relative;
}
</style>
