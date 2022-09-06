<template>
  <v-app>
    <v-main class="page-404 mt-md-10">
      <v-container class="ma-auto">
        <v-row justify="center" align="center">
          <v-slide-x-transition>
            <slot />
          </v-slide-x-transition>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
