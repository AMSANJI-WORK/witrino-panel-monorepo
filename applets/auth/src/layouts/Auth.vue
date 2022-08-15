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
                  <w-auth-title />
                </v-col>
                <v-col cols="12" class="d-flex justify-center">
                  <shop-withrino />
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
import WAuthTitle from "@applets/auth/src/components/WAuthTitle.vue";
import logo from "@shared/components/Icons/Auth/Logo.vue";
import auth from "@shared/components/Icons/Auth/Auth.svg";
import AuthMobile from "@shared/components/Icons/Auth/AuthMobile.vue";
import ShopWithrino from "@shared/components/Icons/Auth/ShopWithrino.vue";
export default {
  components: {
    logo,
    auth,
    WAuthTitle,
    AuthMobile,
    ShopWithrino,
  },
};
</script>

<style lang="scss" scoped>
.auth--background {
  background: url(@shared/components/Icons/Auth/Auth.png) no-repeat;
  background-size: cover;
}
</style>
