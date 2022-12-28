<template>
  <v-card :class="`mx-2 transparent ${bindClass}`" elevation="0">
    <v-card-title class="transparent" :class="cardTitleClass">
      <span :class="titleClass">{{ title }}</span>
      <v-spacer></v-spacer>
      <slot name="action"></slot>
    </v-card-title>
    <v-divider v-show="visibleDivider"></v-divider>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    bindClass: String,
    titleClass: String,
    cardTitleClass: String,
    visibleDivider: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
