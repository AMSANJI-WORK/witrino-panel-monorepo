<template>
  <v-navigation-drawer
    v-model="navigation.drawer"
    :mini-variant="navigation.miniVariant"
    class="white"
    right
    app
    temporary
  >
    <content-drawer rounded="none" />
  </v-navigation-drawer>
</template>

<script>
import navigation from "@applets/operator/src/constants/data";
export default {
  components: {
    ContentDrawer: () => import("@applets/operator/src/components/Reusable/ContentDrawer.vue"),
  },
  data() {
    return { navigation };
  },
};
</script>

<style lang="scss" scoped></style>
