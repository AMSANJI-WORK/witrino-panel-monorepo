<template>
  <v-navigation-drawer
    v-model="navigation.drawer"
    :mini-variant="navigation.miniVariant"
    right
    app
    temporary
  >
    <content-drawer rounded="none" />
  </v-navigation-drawer>
</template>

<script>
import ContentDrawer from "@polotik/components/Reusable/ContentDrawer.vue";
import navigation from "@polotik/constants/data";
export default {
  components: {
    ContentDrawer,
  },
  data() {
    return { navigation };
  },
};
</script>

<style lang="scss" scoped></style>
