<template>
  <v-btn
    block
    class="rounded-lg mt-5 mb-3"
    color="yellow darken-2"
    elevation="4"
    :loading="formLoading"
    x-large
    type="submit"
  >
    <slot />
  </v-btn>
</template>

<script>
import FormMixin from "@shared/mixins/form";
export default {
  mixins: [FormMixin],
};
</script>

<style lang="scss" scoped></style>
