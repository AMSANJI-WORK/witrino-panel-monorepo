<template>
  <v-card-title class="d-md-flex d-none">
    <v-avatar size="150" class="ma-md-3 mx-auto">
      <img :src="require('@shared/assets/image/png/card-branch-avatar.png')" />
    </v-avatar>
    <v-sheet>
      <h4 class="font-weight-regular mb-5">فروشگاه مبلمان رضایی</h4>
    </v-sheet>
    <v-spacer></v-spacer>
    <v-sheet class="transparent d-flex flex-column align-content-start">
      <v-col>
        <v-btn color="green" class="my-2 px-md-8 white--text" x-small
          >فعال</v-btn
        >
      </v-col>
      <v-col class="my-4"> </v-col>
    </v-sheet>
  </v-card-title>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped></style>
