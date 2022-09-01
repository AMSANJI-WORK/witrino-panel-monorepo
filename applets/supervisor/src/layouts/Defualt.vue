<template>
  <v-app>
    <app-mobile-drawer />
    <app-header />
    <mobile-sub-header />
    <v-main class="bg--color">
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
import AppDrawer from "@applets/supervisor/src/components/App/Drawer.vue";
import AppMobileDrawer from "@applets/supervisor/src/components/App/MobileDrawer.vue";
import MobileSubHeader from "@applets/supervisor/src/components/App/MobileSubHeader.vue";
import AppBreadcrumbs from "@shared/components/App/Breadcrumbs.vue";
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
    AppMobileDrawer,
    AppBreadcrumbs,
    MobileSubHeader,
  },
};
</script>
<style lang="scss" scoped>
.bg--color {
  background: #F0F1FA;
}
</style>
