<template>
  <v-stepper-header
    class="elevation-0 grey lighten-3 align-center justify-center"
  >
    <h2 class="font-weight-medium grey--text text--darken-2 py-2">
      {{ pageTitle }}
    </h2>
  </v-stepper-header>
</template>
<script>
export default {
  props: {
    pageTitle: String,
  },
};
</script>

<style lang="scss" scoped></style>
