<template>
  <v-sheet class="transparent d-inline-flex my-4">
    <label for="title">{{ label }} : </label>
    <v-sheet class="transparent mx-3 text--secondary">
      {{ labelValue }}
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  props: {
    label: String,
    labelValue: [String, Number],
  },
};
</script>

<style lang="scss" scoped></style>
