<template>
  <v-app>
    <v-main class="grey lighten-4">
      <v-sheet
        min-height="100vh"
        elevation="0"
        class="transparent d-flex align-center auth--background"
      >
        <v-container fluid class="ma-auto">
          <v-row no-gutters align="center">
            <v-col cols="12" md="6" class="d-flex">
              <v-slide-x-transition>
                <router-view />
              </v-slide-x-transition>
            </v-col>
            <v-col align-self="center" cols="12" md="6">
              <v-row align="center" class="d-flex justify-center">
                <v-col cols="12">
                  <WAuthTitle />
                </v-col>
                <v-col cols="12" class="d-flex justify-center">
                  <v-img
                    height="60%"
                    :src="require('@applets/commen/assets/image/png/witrino-store.png')"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import logo from "@applets/commen/icons/components/auth/Logo.vue";
import WAuthTitle from "@applets/witrino/auth/src/components/WAuthTitle.vue";
export default {
  components: {
    logo,
    WAuthTitle,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.auth--background {
  background: url(@applets/commen/icons/components/auth/Auth.png) no-repeat;
  background-size: cover;
}
</style>
