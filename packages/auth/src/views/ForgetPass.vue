<template>
  <v-col class="d-flex justify-md-end justify-center align-center">
    <v-sheet class="transparent rounded-lg d-md-block d-none" width="60%">
      <ForgetPass />
    </v-sheet>
    <v-sheet class="transparent rounded-lg d-block d-md-none" width="100%">
      <ForgetPass />
    </v-sheet>
  </v-col>
</template>

<script>
import ForgetPass from "@auth/components/ForgetPass.vue";
export default {
  components: {
    ForgetPass,
  },
};
</script>
