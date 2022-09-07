<template>
  <v-app-bar dense dark color="white p-green-primary" class="d-md-none mt-14">
    <v-responsive max-width="250">
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
        prepend-inner-icon="mdi-magnify"
        color="yellow"
        placeholder="جست و جو کنید ..."
        text-color="white"
      ></v-text-field>
    </v-responsive>

    <v-spacer></v-spacer>
    <v-btn x-small fab outlined :ripple="false">
      <v-badge dot overlap left color="error">
        <v-icon color="gray" small>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>
</template>

<script>
import navigation from "@polotik/constants/data";

export default {
  methods: {
    toggleDrawer() {
      navigation.drawer = !navigation.drawer;
    },
  },
};
</script>
