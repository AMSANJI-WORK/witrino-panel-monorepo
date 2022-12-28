<template>
  <v-app>
    <header class="grey lighten-4">
      <v-col class="auth-header--bg pb-0" cols="12">
        <WitrinoAuthTitle class="py-15" />
      </v-col>
    </header>
    <v-main class="grey lighten-4">
      <v-sheet elevation="0" class="transparent d-flex align-center mx-sm-15 my-10">
        <v-container>
          <v-slide-x-transition>
            <router-view />
          </v-slide-x-transition>
        </v-container>
      </v-sheet>
    </v-main>
    <v-footer fiexd padless>
      <v-row justify="center" class="auth-footer--bg"></v-row>
    </v-footer>
  </v-app>
</template>

<script>
import WitrinoAuthTitle from "@applets/witrino/auth/src/components/WAuthTitle.vue";
export default {
  components: {
    WitrinoAuthTitle,
  },
};
</script>

<style lang="scss" scoped>
.auth-footer--bg {
  background: url(@applets/commen/assets/image/png/footer.png) no-repeat top;
  width: 100%;
  height: 50vh;
  background-size: cover;
}
.auth-header--bg {
  background: url(@applets/commen/icons/components/auth/header.svg) no-repeat bottom;
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>
