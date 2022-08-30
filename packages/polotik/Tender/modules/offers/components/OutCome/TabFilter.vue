<template>
  <v-chip-group
    class="rounded-xl grey lighten-2 mx-3"
    v-model="selection"
    active-class="grey darken-3 white--text"
    mandatory
  >
    <v-chip small>همه</v-chip>
    <v-chip small>فعال</v-chip>
    <v-chip small>غیر فعال</v-chip>
    <v-chip small>جدیدترین</v-chip>
  </v-chip-group>
</template>

<script>
export default {
  data() {
    return {
      selection: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
