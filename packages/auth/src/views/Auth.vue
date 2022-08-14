<template>
  <v-row
    justify-md="end"
    justify="center"
    align="center"
    align-content="space-around"
    class="mx-1"
  >
    <v-sheet
      class="transparent rounded-t-xl rounded-b-lg d-md-block d-none"
      width="60%"
      elevation="6"
    >
      <Tabs />
    </v-sheet>
    <v-sheet
      class="transparent rounded-xl rounded-b-lg d-block d-md-none"
      width="100%"
      elevation="2"
    >
      <Tabs />
    </v-sheet>
  </v-row>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Tabs from "@auth/components/Tabs.vue";
const { mapActions } = createNamespacedHelpers("auth");
export default {
  components: {
    Tabs,
  },

  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style lang="scss" scoped></style>
