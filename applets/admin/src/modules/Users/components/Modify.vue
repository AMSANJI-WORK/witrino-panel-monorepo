<template>
  <v-sheet class="transparent">
    <slot name="title"></slot>
    <v-sheet class="mx-2 rounded-lg">
      <ModifyFrom />
    </v-sheet>
  </v-sheet>
</template>

<script>
import ModifyFrom from "./ModifyFrom.vue";
export default {
  components: {
    ModifyFrom,
  },
};

</script>

<style lang="scss" scoped></style>
