<template>
  <v-navigation-drawer v-model="navigation.drawer" right app temporary>
    <content-drawer
      list-group-active-class="p-green-primary--text"
      list-item-active-class="p-green-primary--text  boreder--bold"
      :menu-items="menuItems"
    >
      <template #drawer-top>
        <DrawerCardTop rounded="none" />
      </template>
    </content-drawer>
  </v-navigation-drawer>
</template>

<script>
import menuItems from "@polotik/constants/menu";
import navigation from "@polotik/constants/data";
import ContentDrawer from "@commen/drawer/components/List.vue";
import DrawerCardTop from "@polotik/components/App/DrawerCardTop.vue";
export default {
  components: {
    ContentDrawer,
    DrawerCardTop,
  },
  data() {
    return { navigation, menuItems };
  },
};
</script>

<style lang="scss" scoped>
.boreder--bold {
  border-right: solid 3px #187968;
}
.v-sheet-rating--offset,
.v-sheet-avatar--offset {
  position: relative;
}
.v-sheet-rating--offset {
  top: 2.3rem;
  position: relative;
}
.v-sheet-avatar--offset {
  top: 3.3rem;
  position: relative;
}
</style>
