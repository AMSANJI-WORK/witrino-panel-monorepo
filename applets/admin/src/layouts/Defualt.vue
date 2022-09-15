<template>
  <v-app>
    <AppMobileDrawer
      active-class-list-group="amber lighten-3"
      active-class-list-item="amber lighten-3  boreder--bold"
      :menuItems="menuItems"
      :drawerSectionTop="DrawerCardTop"
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
              :menuItems="menuItems"
              :drawerSectionTop="DrawerCardTop"
            />
          </v-col>

          <v-col class="pt-1" cols="12" lg="9">
            <app-breadcrumbs />
            <v-sheet
              min-height="100vh"
              rounded="lg"
              elevation="0"
              class="pa-0 transparent"
            >
              <slot v-if="haveSlot" />
              <VRouterView v-else />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import menuItems from "@applets/admin/src/constants/menu";
import navigation from "@applets/admin/src/constants/data";
import AppHeader from "@applets/admin/src/components/App/Header.vue";
import MobileSubHeader from "@applets/admin/src/components/App/MobileSubHeader.vue";
import AppBreadcrumbs from "@commen/breadcrumbs/components/Breadcrumbs.vue";
import VRouterView from "@shared/components/Reusable/VRouterView.vue";
import AppDrawerDesktop from "@commen/drawer/components/Desktop.vue";
import AppMobileDrawer from "@commen/drawer/components/Mobile.vue";

export default {
  components: {
    AppHeader,
    AppDrawerDesktop,
    VRouterView,
    AppMobileDrawer,
    AppBreadcrumbs,
    MobileSubHeader,
  },
  props: {
    haveSlot: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuItems,
      navigation,
      DrawerCardTop: () =>
        import("@applets/admin/src/components/App/DrawerCardTop.vue"),
    };
  },
};
</script>
<style lang="scss" scoped></style>
