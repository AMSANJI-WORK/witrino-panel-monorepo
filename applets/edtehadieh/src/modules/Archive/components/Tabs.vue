<template>
  <v-card elevation="0" class="pa-5 my-5 rounded-lg" outlined>
    <v-tabs
      v-model="tab"
      hide-slider
      class="rounded-lg py-3"
      active-class="rounded-t-lg grey lighten-4 black--text"
    >
      <v-tab key="docs"> اسناد اتحادیه </v-tab>
      <v-tab key="circular"> بخشنامه ها </v-tab>
      <v-tab key="unit"> واحد صنفی</v-tab>
      <v-spacer></v-spacer>
      <v-btn icon color="grey" class="my-auto">
        <v-icon>mdi-file-export</v-icon>
      </v-btn>
      <v-btn
        dark
        color="yellow darken-3"
        to="create"
        small
        class="white--text my-auto ml-2 d-md-flex d-none"
      >
        بارگذاری سند
      </v-btn>
      <v-btn
        dark
        color="yellow darken-3"
        small
        tile
        to="create"
        class="white--text my-auto rounded-lg ml-2 d-md-none d-flex"
      >
        <v-icon class="white--text">mdi-plus</v-icon>
      </v-btn>
      <v-tabs-items v-model="tab" active-class="grey lighten-4 rounded-tl-lg">
        <v-tab-item key="docs">
          <v-sheet class="mt-6 transparent"><docs-data-table /></v-sheet>
        </v-tab-item>
        <v-tab-item key="circular">
          <v-sheet class="mt-6 transparent"><circular-data-table /></v-sheet>
        </v-tab-item>
        <v-tab-item key="unit">
          <v-sheet class="mt-6 transparent"><unit-data-table /></v-sheet>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
import DocsDataTable from "@edtehadieh/modules/Archive/components/DataTable/Docs.vue";
import CircularDataTable from "@edtehadieh/modules/Archive/components/DataTable/Circular.vue";
import UnitDataTable from "@edtehadieh/modules/Archive/components/DataTable/Unit.vue";
export default {
  components: {
    DocsDataTable,
    CircularDataTable,
    UnitDataTable,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
