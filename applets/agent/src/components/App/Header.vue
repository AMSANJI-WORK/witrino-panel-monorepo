<template>
  <app-header>
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
import navigation from "@applets/agent/src/constants/data";
import LogoHeader from "@shared/components/Icons/Agent/LogoHeader.vue";
import AppHeader from "@commen/header/components/Header.vue";

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
