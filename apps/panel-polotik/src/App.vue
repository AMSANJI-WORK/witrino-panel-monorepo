<template>
  <v-slide-x-transition>
    <router-view />
  </v-slide-x-transition>
</template>

<script>
import Cookies from "js-cookie";
export default {
  computed: {
    token() {
      return Cookies.get("token") ?? null;
    },
  },
  methods: {
    // isAuthorizate() {
    //   if (!this.token && this.$router.currentRoute.path != "/set-permission")
    //     return this.$router.push("/set-permission");
    // },
  },
  created() {
    // this.isAuthorizate();
  },
};
</script>

<style lang="scss" scoped></style>
