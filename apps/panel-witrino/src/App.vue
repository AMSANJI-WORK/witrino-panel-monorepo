<template>
  <v-slide-x-transition>
    <router-view />
  </v-slide-x-transition>
</template>

<script>
import Cookies from "js-cookie";
import ZoneMixin from "@packages/zone/mixin/zone";

export default {
  mixins: [ZoneMixin],
  computed: {
    isLogin() {
      return Cookies.get("access_token") ?? null;
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
