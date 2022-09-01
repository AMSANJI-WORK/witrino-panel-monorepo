<template>
  <v-app-bar dark app color="#393939">
    <v-container class="pa-0 fill-height">
      <v-btn icon class="d-lg-none mb-1" @click="toggleDrawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <logo class="ml-2 d-md-block d-none" />
      <v-responsive max-width="250" class="d-md-flex d-none mr-10">
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
      <v-toolbar-title class="font-weight-black">پنل اصناف</v-toolbar-title>
      <v-spacer></v-spacer>
      <logo class="ml-2 d-block d-md-none" />
      <v-btn small fab :ripple="false" class="d-md-flex ml-2 d-none">
        <v-badge dot overlap left color="error">
          <v-icon color="gray" small>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import navigation from "@polotik/constants/data";
import Logo from "@polotik/components/Icons/Logo.vue";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      navigation,
    };
  },
  methods: {
    toggleDrawer() {
      navigation.drawer = !navigation.drawer;
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(.v-toolbar__content, .v-toolbar__extension) {
  padding: 4px 0px;
}
</style>
