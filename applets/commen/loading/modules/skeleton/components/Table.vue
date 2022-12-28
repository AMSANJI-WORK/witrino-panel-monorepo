<template>
  <v-skeleton-loader v-bind="attrs" type="table"></v-skeleton-loader>
</template>

<script>
export default {
  data() {
    return {
      attrs: {
        elevation: 2,
        loading: true,
        class: "mx-2 rounded-lg",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
