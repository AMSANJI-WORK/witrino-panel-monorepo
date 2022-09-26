<template>
  <v-sheet class="transparent" width="100%">
    <DrawerSkeletonLoder v-show="loading" />
    <v-sheet
      v-show="!loading"
      rounded="lg"
      width="100%"
      elevation="2"
      :class="`pt-${paddingTop}`"
    >
      <content-drawer
        :list-group-active-class="activeClassListGroup"
        :list-item-active-class="activeClassListItem"
        :menu-items="menuItems"
      >
        <template #drawer-top>
          <component :is="drawerSectionTop" rounded="lg" />
        </template>
      </content-drawer>
    </v-sheet>
  </v-sheet>
</template>

<script>
import ContentDrawer from "./List.vue";
import DrawerSkeletonLoder from "@commen/loading/modules/skeleton/components/Drawer.vue";
import mainElementLoading from "@commen/loading/modules/skeleton/mixins/main-element";
export default {
  mixins: [mainElementLoading],
  components: { ContentDrawer, DrawerSkeletonLoder },
  props: {
    activeClassListGroup: String,
    activeClassListItem: String,
    drawerSectionTop: Function,
    menuItems: Array,
    paddingTop: {
      type: Number,
      default: 2,
    },
  },
  created() {
    this.elementReady();
  },
};
</script>
