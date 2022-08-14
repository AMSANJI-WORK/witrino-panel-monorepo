<template>
  <v-sheet class="transparent">
    <v-card elevation="0" class="rounded-lg">
      <CardHeaderDetailDesktop />
      <CardHeaderDetailMoblie />
    </v-card>
  </v-sheet>
</template>

<script>
import CardHeaderDetailDesktop from "./CardHeaderDetailDesktop.vue";
import CardHeaderDetailMoblie from "./CardHeaderDetailMoblie.vue";
export default {
  components: {
    CardHeaderDetailDesktop,
    CardHeaderDetailMoblie,
  },
};
</script>

<style lang="scss" scoped></style>
