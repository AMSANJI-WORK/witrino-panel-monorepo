<template>
  <v-sheet class="transparent" width="100%">
    <DrawerSkeletonLoder v-if="loading" />
    <v-sheet v-else rounded="lg" width="100%">
      <ContentDrawer />
    </v-sheet>
  </v-sheet>
</template>

<script>
import mainElementLoading from "@commen/loading/modules/skeleton/mixins/main-element";
import ContentDrawer from "@polotik/components/Reusable/ContentDrawer.vue";
import DrawerSkeletonLoder from "@commen/loading/modules/skeleton/components/Drawer.vue";
export default {
  mixins: [mainElementLoading],
  components: { ContentDrawer, DrawerSkeletonLoder },
  created() {
    this.elementReady();
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
