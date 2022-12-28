<template>
  <v-col class="d-flex justify-md-end justify-center align-center">
    <v-sheet class="transparent rounded-lg d-md-block d-none" width="60%">
      <SetPass />
    </v-sheet>
    <v-sheet class="transparent rounded-lg d-block d-md-none" width="100%">
      <SetPass />
    </v-sheet>
  </v-col>
</template>

<script>
import SetPass from "@applets/witrino/auth/src/components/SetPass.vue";
export default {
  components: {
    SetPass,
  },
};
</script>
