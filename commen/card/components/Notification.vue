<template>
  <v-card class="pa-0 ma-2" elevation="3" rounded="lg">
    <v-card-title class="green lighten-2 my-3 py-3">
      <slot name="cardTilte"></slot>
      <v-spacer></v-spacer>
      <slot name="cardTilteEnd"></slot>
    </v-card-title>
    <v-card-subtitle class="py-4 yellow--text green d-flex font-weight-bold">
      <slot name="cardSubTilte"></slot>
      <v-spacer></v-spacer>
      <slot name="cardSubTilteEnd" />
    </v-card-subtitle>
    <v-card-text
      class="green white--text py-0 font-weight-thin"
      style="font-size: 12px"
    >
      <slot name="cardText"></slot>

      <v-divider class="mt-2 grey"></v-divider>
    </v-card-text>
    <v-card-actions class="green py-0">
      <v-spacer></v-spacer>
      <v-btn text class="mb-1 white--text" plain disabled>بیشتر</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script></script>

<style lang="scss" scoped></style>
