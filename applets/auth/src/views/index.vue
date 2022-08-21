<template>
  <v-sheet class="transparent">
    <component :is="authLayout"></component>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    authLayout() {
      return this.$vuetify.breakpoint.mdAndUp
        ? () => import("@applets/auth/src/layouts/Auth.vue")
        : () => import("@applets/auth/src/layouts/AuthMoblie.vue");
    },
  },
};
</script>

<style lang="scss" scoped></style>
