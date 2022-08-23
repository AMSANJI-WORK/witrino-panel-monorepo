<template>
  <v-card class="pa-0 ma-2" elevation="0" rounded="lg">
    <v-card-title class="green lighten-2 my-3 py-3">
      <v-chip small class="white red--text"
        ><v-icon color="red" small class="mx-1">mdi-bell-outline</v-icon>
        جدیدترین اخبار ها</v-chip
      >
    </v-card-title>
    <v-card-subtitle class="py-4 yellow--text green d-flex font-weight-bold">
      <v-sheet class="transparent"
        >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</v-sheet
      >
      <v-spacer></v-spacer>
      <v-sheet class="transparent white--text">2 ساعت پیش</v-sheet>
    </v-card-subtitle>

    <v-card-actions class="green py-0">
      <v-spacer></v-spacer>
      <v-btn dark text class="mb-1" :ripple="false">بیشتر</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
