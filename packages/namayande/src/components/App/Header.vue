<template>
  <app-header color="blue-darken-5">
    <template #header-title>
      <v-btn icon class="d-lg-none mb-1" @click="toggleDrawer">
        <v-icon color="white">mdi-dots-vertical</v-icon>
      </v-btn>
      <Logo class="ml-2 mt-1" />
      <v-toolbar-title class="yellow--text darken-1">
        <span class="yellow--text darken-1 font-weight-bold d-md-block d-none"
          >ویترین نوین کسب و کار
        </span>
        <span
          class="yellow--text darken-1 font-weight-bold text-caption d-none d-md-none d-sm-block"
          >ویترین نوین کسب و کار
        </span>
      </v-toolbar-title>
    </template>
  </app-header>
</template>

<script>
import Logo from "@shared/components/Icons/Namayande/Logo.vue";
import navigation from "@namayande/constants/data";
import AppHeader from "@shared/components/App/Header.vue";

import Cookies from "js-cookie";
export default {
  components: {
    Logo,
    AppHeader,
  },
  computed: {
    userId() {
      return Cookies.get("userId");
    },
  },
  data() {
    return {
      navigation,
      toggleDrawer: () => (navigation.drawer = !navigation.drawer),
    };
  },
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
