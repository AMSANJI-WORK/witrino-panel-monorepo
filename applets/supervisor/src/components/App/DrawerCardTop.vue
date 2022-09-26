<template>
  <v-sheet
    class="bg-drawer--main w-primary-green-lighten-2 rounded-t-xl ma-3 d-flex flex-column align-center sheet--boreder-bottom"
    height="250"
    elevation="5"
  >
    <v-sheet
      class="my-auto transparent sheet-ineer--background-img"
      width="100%"
    >
      <v-sheet
        class="d-flex flex-column align-center text-center my-auto transparent sheet-ineer"
        width="100%"
      >
        <v-avatar size="100" class="mt-6">
          <img
            :src="require('@commen/assets/image/png/card-branch-avatar.png')"
          />
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
  </v-sheet>
</template>

<script></script>

<style lang="scss" scoped>
$rotate-deg: -15deg;
.bg-drawer--main {
  background: url(@commen/assets/image/png/bg-drawer-main.png) no-repeat;
  background-position: center;
  background-size: 150%;
}
.sheet-ineer--background-img {
  background: url(@commen/assets/image/svg/sofabg.svg) no-repeat right bottom;
  background-size: 40%;
  transform: rotate($rotate-deg);
}
.sheet-ineer {
  transform: rotate(-1 * $rotate-deg);
}
.sheet--boreder-bottom {
  border-bottom-left-radius: 75px;
  border-bottom-right-radius: 75px;
}
</style>
