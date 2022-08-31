<template>
  <v-sheet
    class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
  >
    <v-col v-for="n in cardCount" :key="n" class="pa-2" cols="12" sm="6" md="4">
      <v-skeleton-loader
        v-bind="attrs"
        type="article, actions"
      ></v-skeleton-loader>
    </v-col>
  </v-sheet>
</template>

<script>
export default {
  props: {
    cardCount: {
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
