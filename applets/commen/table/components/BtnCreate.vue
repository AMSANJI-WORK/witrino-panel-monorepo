<template>
  <v-btn
    v-bind="$attrs"
    color="primary"
    class="white--text rounded-lg"
    link
    v-on="$listeners"
    to="create"
  >
    <slot />
  </v-btn>
</template>
