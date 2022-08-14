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

<style lang="scss" scoped>
.v-application .text-sm-body-1 {
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.03125em !important;
  font-family: Vazir !important;
}
.v-application .text-caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em !important;
  font-family: Vazir !important;
}
</style>
