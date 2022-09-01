<template>
  <v-slide-x-transition>
    <router-view />
  </v-slide-x-transition>
</template>

<script>
import Cookies from "js-cookie";

export default {
  computed: {
    isLogin() {
      return (
        Cookies.get("access_token") ?? Cookies.get("refresh_token") ?? null
      );
    },
    isLoginPage() {
      return this.$route.fullPath.includes("auth");
    },
  },
  methods: {
    checkPermision() {
      if (!this.isLogin && !this.isLoginPage) return this.$router.push("/auth");
    },
  },
  created() {
    this.checkPermision();
  },
};
</script>

<style lang="scss" scoped></style>
