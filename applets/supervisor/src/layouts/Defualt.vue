<template>
  <v-app>
    <AppMobileDrawer
      active-class-list-group="teal darken-4 white--text"
      active-class-list-item="teal darken-4 white--text  boreder--bold"
      :menuItems="menuItems"
      :drawerSectionTop="DrawerCardTop"
      :navigation="navigation"
    />
    <AppHeader />
    <AppMobileSubHeader />
    <v-main class="bg--color">
      <v-container>
        <v-row>
          <v-col class="d-lg-block d-none" cols="3">
            <AppDrawerDesktop
              active-class-list-group="teal darken-4 white--text"
              active-class-list-item="teal darken-4 white--text  boreder--bold"
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
import AppHeader from "@applets/supervisor/src/components/App/Header.vue";
import AppDrawerDesktop from "@commen/drawer/components/Desktop.vue";
import AppMobileDrawer from "@commen/drawer/components/Mobile.vue";
import AppMobileSubHeader from "@applets/supervisor/src/components/App/MobileSubHeader.vue";
import AppBreadcrumbs from "@commen/breadcrumbs/components/Breadcrumbs.vue";
import VRouterView from "@shared/components/Reusable/VRouterView.vue";
import menuItems from "@applets/supervisor/src/constants/menu";
import navigation from "@applets/supervisor/src/constants/data";

export default {
  props: {
    haveSlot: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    AppHeader,
    AppDrawerDesktop,
    VRouterView,
    AppMobileDrawer,
    AppBreadcrumbs,
    AppMobileSubHeader,
  },
  data() {
    return {
      DrawerCardTop: () =>
        import("@applets/supervisor/src/components/App/DrawerCardTop.vue"),
      menuItems,
      navigation,
    };
  },
};
</script>
<style lang="scss" scoped></style>
