<template>
  <v-card-title class="d-flex flex-column justify-center d-md-none">
    <v-avatar size="150" class="ma-md-3 mx-auto">
      <img :src="require('@shared/assets/image/png/card-branch-avatar.png')" />
    </v-avatar>
    <v-sheet class="d-flex flex-column justify-center">
      <v-sheet class="d-flex flex-column align-center">
        <v-btn color="green" class="my-2 white--text" x-small>
          فعال
          <v-icon right> mdi-label </v-icon>
        </v-btn>
        <h5 class="text-center font-weight-regular mb-5">
          فروشگاه مبلمان رضایی
        </h5>
      </v-sheet>
    </v-sheet>
  </v-card-title>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped></style>
