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
              <slot />
              <VRouterView v-if="!$slots.default" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@applets/namayande/src/components/App/Header.vue";
import AppDrawerDesktop from "@commen/drawer/components/Desktop.vue";
import AppMobileDrawer from "@commen/drawer/components/Mobile.vue";
import AppBreadcrumbs from "@commen/breadcrumbs/components/Breadcrumbs.vue";
import AppMobileSubHeader from "@applets/namayande/src/components/App/MobileSubHeader.vue";
import menuItems from "@applets/namayande/src/constants/menu";
import navigation from "@applets/namayande/src/constants/data";
import VRouterView from "@shared/components/Reusable/VRouterView.vue";

export default {
  data() {
    return {
      menuItems,
      navigation,
      DrawerCardTop: () =>
        import("@applets/namayande/src/components/App/DrawerCardTop.vue"),
    };
  },
  components: {
    AppHeader,
    AppDrawerDesktop,
    VRouterView,
    AppMobileSubHeader,
    AppMobileDrawer,
    AppBreadcrumbs,
  },
};
</script>
<style lang="scss" scoped></style>
