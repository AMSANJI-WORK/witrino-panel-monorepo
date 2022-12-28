<template>
  <v-app>
    <AppMobileDrawer
      active-class-list-group="amber lighten-3"
      active-class-list-item="amber lighten-3  boreder--bold"
      :menu-items="menuItems"
      :drawer-section-top="DrawerCardTop"
      :navigation="navigation"
    />
    <app-header />
    <mobile-sub-header />
    <v-main class="w-primary-secondary">
      <v-container>
        <v-row>
          <v-col class="d-lg-block d-none" cols="3">
            <AppDrawerDesktop
              active-class-list-group="amber lighten-3"
              active-class-list-item="amber lighten-3  boreder--bold"
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
import menuItems from "@applets/witrino/admin/src/constants/menu";
import navigation from "@applets/witrino/admin/src/constants/data";
import AppHeader from "@applets/witrino/admin/src/components/App/Header.vue";
import MobileSubHeader from "@applets/witrino/admin/src/components/App/MobileSubHeader.vue";
import AppBreadcrumbs from "@applets/commen/breadcrumbs/components/Breadcrumbs.vue";
import AppDrawerDesktop from "@applets/commen/drawer/components/Desktop.vue";
import AppMobileDrawer from "@applets/commen/drawer/components/Mobile.vue";

export default {
  components: {
    AppHeader,
    AppDrawerDesktop,
    AppMobileDrawer,
    AppBreadcrumbs,
    MobileSubHeader,
  },

  data() {
    return {
      menuItems,
      navigation,
      DrawerCardTop: () =>
        import("@applets/witrino/admin/src/components/App/DrawerCardTop.vue"),
    };
  },
};
</script>
<style lang="scss" scoped></style>
