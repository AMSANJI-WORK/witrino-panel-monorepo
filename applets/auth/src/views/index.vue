<template>
  <v-sheet class="transparent">
    <auth-layout v-if="$vuetify.breakpoint.mdAndUp" />
    <auth-moblie-layout v-else />
  </v-sheet>
</template>

<script>
import AuthLayout from "@applets/auth/src/layouts/Auth.vue";
import AuthMoblieLayout from "@applets/auth/src/layouts/AuthMoblie.vue";
export default {
  components: {
    AuthLayout,
    AuthMoblieLayout,
  },
};
</script>

<style lang="scss" scoped></style>
