<template>
  <v-col class="d-flex justify-md-end justify-center align-center">
    <v-sheet class="transparent rounded-lg d-md-block d-none" width="60%">
      <Otp />
    </v-sheet>
    <v-sheet class="transparent rounded-lg d-block d-md-none" width="100%">
      <Otp />
    </v-sheet>
  </v-col>
</template>

<script>
import Otp from "@applets/auth/src/components/Otp.vue";
export default {
  components: {
    Otp,
  },
};
</script>
