<template>
  <v-app-bar app :dark="dark" :color="color">
    <v-container class="pa-0 fill-height">
      <slot name="header-title" />
      <v-spacer></v-spacer>
      <header-content-end />
    </v-container>
  </v-app-bar>
</template>

<script>
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
};
</script>

<style lang="scss" scoped></style>
