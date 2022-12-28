<template>
  <v-app>
    <AppMobileDrawer
      active-class-list-group="light-blue darken-4 white--text"
      active-class-list-item="light-blue darken-4 white--text  boreder--bold"
      :menuItems="menuItems"
      :drawerSectionTop="DrawerCardTop"
      :navigation="navigation"
    />
    <AppHeader />
    <AppMobileSubHeader />
    <v-main class="w-primary-secondary">
      <v-container>
        <v-row>
          <v-col class="d-lg-block d-none" cols="3">
            <AppDrawerDesktop
              active-class-list-group="light-blue darken-4 white--text"
              active-class-list-item="light-blue darken-4 white--text  boreder--bold"
              :menuItems="menuItems"
              :drawerSectionTop="DrawerCardTop"
            />
          </v-col>

          <v-col class="pt-1" cols="12" lg="9">
            <AppBreadcrumbs />
            <v-sheet
              min-height="100vh"
              rounded="lg"
              elevation="0"
              class="pa-0 transparent"
            >
              <v-slide-x-transition>
                <router-view />
              </v-slide-x-transition>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@applets/witrino/agent/src/components/App/Header.vue";
import AppDrawerDesktop from "@applets/commen/drawer/components/Desktop.vue";
import AppMobileDrawer from "@applets/commen/drawer/components/Mobile.vue";
import AppMobileSubHeader from "@applets/witrino/agent/src/components/App/MobileSubHeader.vue";
import AppBreadcrumbs from "@applets/commen/breadcrumbs/components/Breadcrumbs.vue";
import menuItems from "@applets/witrino/agent/src/constants/menu";
import navigation from "@applets/witrino/agent/src/constants/data";

export default {
  data() {
    return {
      menuItems,
      navigation,
      DrawerCardTop: () =>
        import("@applets/witrino/agent/src/components/App/DrawerCardTop.vue"),
    };
  },
  components: {
    AppHeader,
    AppDrawerDesktop,
    AppMobileDrawer,
    AppBreadcrumbs,
    AppMobileSubHeader,
  },
};
</script>
<style lang="scss" scoped>
.bg--color {
  background: #f0f1fa;
}
</style>
