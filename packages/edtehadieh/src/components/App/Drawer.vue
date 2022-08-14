<template>
  <v-sheet rounded="lg" width="100%">
    <content-drawer></content-drawer>
  </v-sheet>
</template>

<script>
import menuItems from "@edtehadieh/constants/menu";
export default {
  components: {
    ContentDrawer: () => import("@edtehadieh/components/Reusable/ContentDrawer.vue"),
  },
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
