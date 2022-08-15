<template>
  <app-header color="dark">
    <template #header-title>
      <v-btn icon class="d-lg-none mb-1" @click="toggleDrawer">
        <v-icon color="white">mdi-dots-vertical</v-icon>
      </v-btn>
      <LogoHeader class="ml-2" />
      <v-toolbar-title class="font-weight-black yellow--text darken-1">
        <span class="yellow--text darken-1 text-caption font-weight-normal"
          >اتحادیه شبکه اینترنتی کسب و کار</span
        ></v-toolbar-title
      >
    </template>
  </app-header>
</template>

<script>
import navigation from "@applets/admin/src/constants/data";
import LogoHeader from "@shared/components/Icons/Admin/LogoHeader.vue";
import AppHeader from "@shared/components/App/Header.vue";

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

<style lang="scss" scoped>
.v-application .text-caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em !important;
  font-family: Vazir !important;
}
</style>
