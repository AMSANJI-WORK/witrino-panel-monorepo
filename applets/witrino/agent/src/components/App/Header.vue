<template>
  <app-header color="w-primary-dark">
    <template #header-title>
      <v-btn icon class="d-lg-none mb-1" @click="toggleDrawer">
        <v-icon color="white">mdi-dots-vertical</v-icon>
      </v-btn>
      <LogoHeader class="ml-2" />
      <v-toolbar-title
        class="font-weight-bold text-subtitle-2 mr-sm-5 mr-3 white--text"
        >ویترین نوین کسب و کار
      </v-toolbar-title>
    </template>
  </app-header>
</template>

<script>
import navigation from "@applets/witrino/agent/src/constants/data";
import LogoHeader from "@applets/commen/icons/components/agent/LogoHeader.vue";
import AppHeader from "@applets/commen/header/components/Header.vue";

export default {
  components: {
    LogoHeader,
    AppHeader,
  },
  data: () => ({
    navigation,
    toggleDrawer: () => (navigation.drawer = !navigation.drawer),
  }),
};
</script>

<style lang="scss" scoped></style>
