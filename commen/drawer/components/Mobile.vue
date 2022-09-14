<template>
  <v-navigation-drawer v-model="navigation.drawer" right app temporary>
    <content-drawer
      :list-group-active-class="activeClassListGroup"
      :list-item-active-class="activeClassListItem"
      :menu-items="menuItems"
    >
      <template #drawer-top>
        <component :is="drawerSectionTop" rounded="none" />
      </template>
    </content-drawer>
  </v-navigation-drawer>
</template>

<script>
import ContentDrawer from "./List.vue";
export default {
  components: {
    ContentDrawer,
  },
  props: {
    activeClassListGroup: String,
    activeClassListItem: String,
    menuItems: Array,
    navigation: Object,
    drawerSectionTop: Function,
  },
};
</script>

<style lang="scss" scoped></style>
