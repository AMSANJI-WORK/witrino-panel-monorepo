<template>
  <v-sheet class="rounded-lg pa-lg-10 pa-sm-5" width="100%" elevation="2">
    <v-col cols="12" class="pb-0">
      <v-btn icon @click="$router.back()">
        <v-icon color="blue-darken-5">mdi-arrow-right</v-icon>
      </v-btn>
    </v-col>
    <v-row justify="center" align="center" class="my-0">
      <v-col cols="12" class="pt-0">
        <h4 class="text-h6 text-center">تعریف رمز عبور</h4>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" class="py-0">
        <SetPass />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import SetPass from "@applets/witrino/auth/src/components/Form/SetPass.vue";

export default {
  components: {
    SetPass,
  },
};
</script>

<style lang="scss" scoped></style>
