<template>
  <v-app>
    <AppMobileDrawer
      active-class-list-group="indigo darken-4--text white--text"
      active-class-list-item="indigo darken-4--text  boreder--bold"
      :menu-items="menuItems"
      :drawer-section-top="DrawerCardTop"
      :navigation="navigation"
    />
    <AppHeader />
    <AppMobileSubHeader />
    <v-main class="w-primary-secondary">
      <v-container>
        <v-row>
          <v-col class="d-lg-block d-none" cols="3">
            <AppDrawerDesktop
              active-class-list-group="indigo darken-4--text white--text"
              active-class-list-item="indigo darken-4--text  boreder--bold"
              :menu-items="menuItems"
              :drawer-section-top="DrawerCardTop"
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
import AppHeader from "@applets/witrino/buisness/src/components/App/Header.vue";
import AppDrawerDesktop from "@applets/commen/drawer/components/Desktop.vue";
import AppMobileDrawer from "@applets/commen/drawer/components/Mobile.vue";
import AppBreadcrumbs from "@applets/commen/breadcrumbs/components/Breadcrumbs.vue";
import AppMobileSubHeader from "@applets/witrino/buisness/src/components/App/MobileSubHeader.vue";
import menuItems from "@applets/witrino/buisness/src/constants/menu";
import navigation from "@applets/witrino/buisness/src/constants/data";

export default {
  data() {
    return {
      menuItems,
      navigation,
      DrawerCardTop: () =>
        import("@applets/witrino/buisness/src/components/App/DrawerCardTop.vue"),
    };
  },
  components: {
    AppHeader,
    AppDrawerDesktop,
    AppMobileSubHeader,
    AppMobileDrawer,
    AppBreadcrumbs,
  },
};
</script>
<style lang="scss" scoped></style>
