<template>
  <app-header color="#495057">
    <template #header-title>
      <v-btn icon class="d-lg-none mb-1" @click="toggleDrawer">
        <v-icon color="white">mdi-dots-vertical</v-icon>
      </v-btn>
      <Logo class="ml-2 mt-1" />
      <v-toolbar-title class="darken-1">
        <span
          class="white--text darken-1 mx-3 mx-sm-5 font-weight-bold text-subtitle-2"
          >ویترین نوین کسب و کار
        </span>
      </v-toolbar-title>
    </template>
  </app-header>
</template>

<script>
import Logo from "@applets/commen/icons/components/buisness/Logo.vue";
import navigation from "@applets/witrino/buisness/src/constants/data";
import AppHeader from "@applets/commen/header/components/Header.vue";
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

<style lang="scss" scoped>
.v-application .text-caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em !important;
  font-family: Vazir !important;
}
</style>
