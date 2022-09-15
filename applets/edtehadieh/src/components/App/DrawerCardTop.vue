<template>
  <v-sheet
    class="rounded-t-xl ma-3 d-flex flex-column align-center sheet--boreder-bottom sheet--background"
    height="250"
    elevation="5"
  >
    <v-sheet
      class="d-flex flex-column align-center text-center my-auto transparent sheet-ineer--background-img"
      width="100%"
    >
      <v-avatar size="100" color="grey" class="mt-6">
        <img src="@commen/assets/image/png/sofa.png" />
      </v-avatar>
      <v-sheet class="text-center mt-5 mb-2 transparent">
        <h4 class="my-1 white--text">گروه تولیدی و صنعتی حسام</h4>
        <span
          class="mt-1 mb-4 yellow--text darken-1"
          style="font-size: 0.875rem; font-weight: 200"
          >محمد مهدی حیاتی</span
        >
      </v-sheet>
    </v-sheet>
  </v-sheet>
</template>

<script></script>

<style lang="scss" scoped>
.sheet--background {
  background: #9529ff;
}
.sheet-ineer--background-img {
  background: url(@commen/assets/image/svg/sofabg.svg) no-repeat left bottom;
}
.sheet--boreder-bottom {
  border-bottom-left-radius: 75px;
  border-bottom-right-radius: 75px;
}
.sheet--boreder-bottom {
  border-bottom-left-radius: 75px;
  border-bottom-right-radius: 75px;
}
</style>
