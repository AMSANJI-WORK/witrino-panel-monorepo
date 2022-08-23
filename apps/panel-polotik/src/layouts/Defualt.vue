<template>
  <v-app>
    <app-mobile-drawer />
    <app-header />
    <app-mobile-sub-header />
    <v-main class="grey lighten-4">
      <v-container>
        <v-row>
          <v-col class="d-lg-block d-none" cols="3">
            <app-drawer />
            <app-user-box />
          </v-col>

          <v-col class="pt-1" cols="12" lg="9">
            <app-breadcrumbs />
            <v-sheet
              min-height="100vh"
              rounded="lg"
              elevation="0"
              class="pa-0 grey lighten-4"
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
export default {
  components: {
    AppHeader: () => import("@polotik/components/App/Header.vue"),
    AppDrawer: () => import("@polotik/components/App/Drawer.vue"),
    AppMobileDrawer: () => import("@polotik/components/App/MobileDrawer.vue"),
    AppBreadcrumbs: () => import("@polotik/components/App/Breadcrumbs.vue"),
    AppMobileSubHeader: () => import("@polotik/components/App/MobileSubHeader.vue"),
    AppUserBox: () => import("@polotik/components/App/UserBox.vue"),
  },
};
</script>
<style lang="scss" scoped>
.bg-secondary {
  background: #c7c7c7;
}
</style>
