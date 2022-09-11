<template>
  <v-sheet class="transparent" width="100%">
    <DrawerSkeletonLoder v-if="loading" />
    <v-sheet v-else rounded="lg" width="100%" elevation="2">
      <content-drawer
        list-group-active-class="p-green-primary--text"
        list-item-active-class="p-green-primary--text  boreder--bold"
        :menu-items="menuItems"
      >
        <template #drawer-top>
          <DrawerCardTop />
        </template>
      </content-drawer>
    </v-sheet>
  </v-sheet>
</template>

<script>
import menuItems from "@polotik/constants/menu";
import ContentDrawer from "@commen/drawer/components/List.vue";
import mainElementLoading from "@commen/loading/modules/skeleton/mixins/main-element";
import DrawerSkeletonLoder from "@commen/loading/modules/skeleton/components/Drawer.vue";
import DrawerCardTop from "@polotik/components/App/DrawerCardTop.vue";
export default {
  mixins: [mainElementLoading],
  components: { ContentDrawer, DrawerSkeletonLoder, DrawerCardTop },
  data() {
    return {
      menuItems,
    };
  },
  created() {
    this.elementReady();
  },
};
</script>
