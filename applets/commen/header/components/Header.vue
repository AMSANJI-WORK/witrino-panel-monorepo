<template>
  <v-app-bar app v-bind="$attrs" dark>
    <v-container class="pa-0 fill-height">
      <slot name="header-title" />
      <v-spacer></v-spacer>
      <slot name="header-end" />
      <HeaderContentEnd v-if="!$slots['header-end']" />
    </v-container>
  </v-app-bar>
</template>

<script>
import HeaderContentEnd from "./HeaderContentEnd.vue";
export default {
  inheritAttrs: false,
  components: {
    HeaderContentEnd,
  },
};
</script>

<style lang="scss" scoped></style>
