<template>
  <v-card width="100%" class="rounded-lg">
    <v-skeleton-loader v-bind="attrs" type="image"></v-skeleton-loader>
    <v-divider></v-divider>
    <v-sheet class="transparent mt-4 pb-10" width="100%">
      <v-list nav dense exact v-for="(item, i) in 5" :key="i" class="py-1">
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          v-bind="attrsList"
          type="list-item-avatar"
        ></v-skeleton-loader>
      </v-list>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      attrs: {
        elevation: 0,
        loading: true,
        class: "pa-4 rounded-lg",
      },
      attrsList: {
        elevation: 0,
        loading: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
