<template>
  <v-card
    class="rounded-lg mt-2 mb-4 mx-2 white--text"
    elevation="1"
    outlined
    color="grey lighten-2"
  >
    <v-breadcrumbs dense :items="breadCrumbs" class="py-2">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :to="item.to"
          class="crumb-item"
          :disabled="item.disabled"
          exact
        >
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
      <template v-slot:divider>
        <v-icon>mdi-chevron-left</v-icon>
      </template>
    </v-breadcrumbs>
  </v-card>
</template>

<script>
export default {
  computed: {
    breadCrumbs() {
      return this.$route.meta.breadCrumb;
    },
  },
};
</script>
