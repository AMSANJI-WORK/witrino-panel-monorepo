<template>
  <v-hover :disabled="dataSource.disabled">
    <template v-slot:default="{ hover }">
      <v-col
        :class="dataSource.disabled ? '' : 'cursor-pointer'"
        class="pa-2"
        cols="12"
        sm="6"
        md="4"
        @click="goToPage"
      >
        <v-card
          class="py-2 my-2 rounded-lg transition-swing d-flex flex-column justify-space-around"
          width="100%"
          height="100%"
          outlined
          :disabled="dataSource.disabled"
          :elevation="hover ? 3 : 1"
        >
          <v-card-title class="py-0">
            <v-avatar size="60" tile>
              <component :is="dataSource.icon"></component>
            </v-avatar>
            <div class="mr-3">
              <h5>{{ dataSource.title }}</h5>
              <v-card-subtitle class="pr-0 py-0" style="font-size: 10px">{{
                dataSource.subtitle
              }}</v-card-subtitle>
            </div>
            <v-spacer></v-spacer>
            <v-avatar size="30" rounded="pill" color="red lighten-3">{{
              dataSource.number
            }}</v-avatar>
          </v-card-title>
          <v-card-text
            class="pb-0 py-1 font-weight-medium"
            style="font-size: 12px"
            >{{ dataSource.text }}</v-card-text
          >
          <v-card-actions class="pa-0 mx-2">
            <v-spacer></v-spacer>
            <v-btn text link>بیشتر</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </template>
  </v-hover>
</template>

<script>
import Cookies from "js-cookie";
export default {
  props: {
    dataSource: Object,
  },
  methods: {
    goToPage() {
      if (this.dataSource?.route)
        return this.$router.push(this.dataSource.route);
      return (window.location.href = `${Cookies.get("site")}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
