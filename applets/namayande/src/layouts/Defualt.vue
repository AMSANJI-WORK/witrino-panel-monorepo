<template>
  <v-app>
    <app-mobile-drawer />
    <app-header />
    <MobileSubHeader />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col class="d-lg-block d-none" cols="3">
            <app-drawer />
          </v-col>

          <v-col class="pt-1" cols="12" lg="9">
            <app-breadcrumbs />
            <v-sheet
              min-height="100vh"
              rounded="lg"
              elevation="0"
              class="pa-0 grey lighten-3"
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
import AppHeader from "@applets/namayande/src/components/App/Header.vue";
import AppDrawer from "@applets/namayande/src/components/App/Drawer.vue";
import AppMobileDrawer from "@applets/namayande/src/components/App/MobileDrawer.vue";
import AppBreadcrumbs from "@shared/components/App/Breadcrumbs.vue";
import MobileSubHeader from "@applets/namayande/src/components/App/MobileSubHeader.vue";

import VRouterView from "@shared/components/Reusable/VRouterView.vue";

export default {
  props: {
    haveSlot: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    AppHeader,
    AppDrawer,
    VRouterView,
    MobileSubHeader,
    AppMobileDrawer,
    AppBreadcrumbs,
  },
};
</script>
<style lang="scss" scoped>
.bg-secondary {
  background: #c7c7c7;
}
</style>
