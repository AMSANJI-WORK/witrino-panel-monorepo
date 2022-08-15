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
import navigation from "@edtehadieh/constants/data";
export default {
  components: {
    ContentDrawer: () => import("@edtehadieh/components/Reusable/ContentDrawer.vue"),
  },
  data() {
    return { navigation };
  },
};
</script>

<style lang="scss" scoped></style>
