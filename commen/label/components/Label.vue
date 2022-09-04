<template>
  <div class="d-inline-flex my-2 pr-sm-4">
    <slot name="icon" />
    <label for="title" class="mr-1 text-sm-body-1 text-caption"
      >{{ label }} :
    </label>
    <div
      class="mx-xs-3 mx-1 text--secondary text-truncate text-sm-body-1 text-caption"
    >
      {{ labelValue }}
    </div>
  </div>
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
