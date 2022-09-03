<template>
  <v-app-bar app :dark="dark" :color="color">
    <v-container class="pa-0 fill-height">
      <slot name="header-title" />
      <v-spacer></v-spacer>
      <slot name="header-end" v-if="hasSlotEnd" />
      <HeaderContentEnd v-else />
    </v-container>
  </v-app-bar>
</template>

<script>
import HeaderContentEnd from "./HeaderContentEnd.vue";
export default {
  props: {
    color: { type: String, default: "#495057" },
    dark: {
      type: Boolean,
      default: true,
    },
    hasSlotEnd: Boolean,
  },
  components: {
    HeaderContentEnd,
  },
};
</script>

<style lang="scss" scoped></style>
