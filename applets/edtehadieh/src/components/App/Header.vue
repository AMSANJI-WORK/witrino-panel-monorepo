<template>
  <app-header color="w-primary-dark">
    <template #header-title>
      <v-btn icon class="d-lg-none mb-1" @click="toggleDrawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <logo class="ml-2 d-block d-md-none" />
      <logo class="ml-2 d-md-block d-none" />

      <v-toolbar-title
        class="font-weight-bold text-subtitle-2 mr-sm-5 mr-3 white--text"
        >ویترین نوین کسب و کار
      </v-toolbar-title>
    </template>
  </app-header>
</template>

<script>
import Cookies from "js-cookie";
import Logo from "@commen/icons/components/edtehadieh/Logo.vue";
import AppHeader from "@commen/header/components/Header.vue";
import navigation from "@applets/edtehadieh/src/constants/data";
export default {
  components: {
    Logo,
    AppHeader,
  },
  computed: {
    userId() {
      return JSON.parse(localStorage.getItem("userId"));
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
