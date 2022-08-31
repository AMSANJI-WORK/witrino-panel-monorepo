<template>
  <v-navigation-drawer
    v-model="navigation.drawer"
    :mini-variant="navigation.miniVariant"
    class="white"
    right
    app
    temporary
  >
    <ContentDrawer rounded="none" />
  </v-navigation-drawer>
</template>

<script>
import navigation from "@applets/admin/src/constants/data";
import ContentDrawer from "@applets/admin/src/components/Reusable/ContentDrawer.vue";
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
