<template>
  <v-sheet
    class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
  >
    <v-col
      v-for="n in cardCount"
      :key="n"
      class="pa-2"
      cols="12"
      :sm="sm"
      :md="md"
    >
      <v-skeleton-loader
        v-bind="attrs"
        type="article, actions"
      ></v-skeleton-loader>
    </v-col>
  </v-sheet>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    cardCount: {
      type: Number,
      default: 3,
    },
    sm: {
      type: Number,
      default: 6,
    },
    md: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      attrs: {
        elevation: 2,
        loading: true,
        class: "my-3 rounded-lg",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
