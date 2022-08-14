<template>
  <v-app-bar app :dark="dark" :color="color">
    <v-container class="pa-0 fill-height">
      <!-- <v-btn icon class="d-lg-none mb-1" @click="toggleDrawer">
        <v-icon color="white">mdi-dots-vertical</v-icon>
      </v-btn> -->
      <slot name="header-title" />
      <v-spacer></v-spacer>
      <header-content-end />
    </v-container>
  </v-app-bar>
</template>

<script>
// import navigation from "@witrino/constants/data";
import HeaderContentEnd from "@shared/components/Reusable/HeaderContentEnd.vue";
export default {
  props: {
    color: String,
    dark: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    HeaderContentEnd,
  },
  data: () => ({
    // navigation,
    // toggleDrawer: () => (navigation.drawer = !navigation.drawer),
  }),
};
</script>

<style lang="scss" scoped></style>
