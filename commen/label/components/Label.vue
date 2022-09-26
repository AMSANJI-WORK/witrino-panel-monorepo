<template>
  <v-sheet class="d-flex flex-wrap my-2 pr-sm-4 transparent">
    <slot name="icon" />
    <label for="title" class="mr-1 text-sm-body-1 text-no-wrap text-caption"
      >{{ label }} :
    </label>
    <v-sheet
      class="mx-xs-3 mx-1 text--secondary text-sm-body-1 text-caption transparent"
    >
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
