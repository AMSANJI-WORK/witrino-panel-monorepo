<template>
  <v-sheet class="transparent">
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <v-col v-for="n in 4" :key="n" class="pa-2" cols="12" sm="6" md="3">
        <v-skeleton-loader
          v-bind="attrs"
          type="article, actions"
        ></v-skeleton-loader>
      </v-col>
    </v-sheet>
    <v-sheet class="transparent ma-2">
      <v-skeleton-loader
        v-bind="attrs"
        type="article, actions"
      ></v-skeleton-loader>
    </v-sheet>
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <v-col v-for="n in 6" :key="n" class="pa-2" cols="12" sm="6" md="4">
        <v-skeleton-loader
          v-bind="attrs"
          type="article, actions"
        ></v-skeleton-loader>
      </v-col>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      attrs: {
        elevation: 2,
        loading: true,
        class: "rounded-lg px-0",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
