<template>
  <v-sheet class="transparent">
    <List />
  </v-sheet>
</template>

<script>
import List from "../components/List.vue";
export default {
  components: {
    List,
  },
  created() {
    console.dir(this.$store.getters);
  },
};
</script>

<style lang="scss" scoped></style>
