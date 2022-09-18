<template>
  <v-card
    class="rounded-lg mt-2 mb-4 mx-2 white--text"
    elevation="0"
    outlined
    color="#D8D8D8"
  >
    <v-breadcrumbs dense :items="breadCrumbs" class="py-2 px-4">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :to="item.to"
          :disabled="disabled(item)"
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
      let array = [];
      this.$route.matched.forEach((matcher) => {
        matcher.meta?.breadCrumb.forEach((object) => {
          array = [...array, object];
        });
      });
      return array;
    },
  },
  methods: {
    disabled(item) {
      return this.breadCrumbs[this.breadCrumbs.length - 1] == item;
    },
  },
  created() {},
};
</script>
