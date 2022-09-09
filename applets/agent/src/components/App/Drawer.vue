<template>
  <v-sheet class="transparent" width="100%">
    <DrawerSkeletonLoder v-if="pageLoading" />
    <v-sheet v-else rounded="lg" width="100%">
      <ContentDrawer />
    </v-sheet>
  </v-sheet>
</template>

<script>
import menuItems from "@applets/agent/src/constants/menu";
import ContentDrawer from "@applets/agent/src/components/Reusable/ContentDrawer.vue";
import DrawerSkeletonLoder from "@shared/modules/SkeletonLoader/components/Drawer.vue";
import SkeletonLoaderMixin from "@shared/modules/SkeletonLoader/mixins/skeleton-loading";

export default {
  mixins: [SkeletonLoaderMixin],
  components: {
    DrawerSkeletonLoder,
    ContentDrawer,
  },
  data() {
    return {
      items: menuItems,
    };
  },
  created() {
    this.pageReady();
  },
};
</script>
