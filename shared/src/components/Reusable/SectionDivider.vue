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

<style lang="scss" scoped>
.v-application .text-caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em !important;
  font-family: Vazir !important;
}
.v-application .text-subtitle-2 {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em !important;
  font-family: Vazir !important;
}
.v-application .text-h6 {
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: Vazir !important;
}
.v-application .text-subtitle-1 {
  font-size: 1rem !important;
  font-weight: normal;
  line-height: 1.75rem;
  letter-spacing: 0.009375em !important;
  font-family: Vazir !important;
}
</style>
