<template>
  <v-app>
    <AppMobileDrawer />
    <AppHeader />
    <AppMobileSubHeader />
    <v-main class="bg--color">
      <v-container>
        <v-row>
          <v-col class="d-lg-block d-none" cols="3">
            <AppDrawer />
            <AppUserBox />
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
import AppHeader from "@polotik/components/App/Header.vue";
import AppDrawer from "@polotik/components/App/Drawer.vue";
import AppMobileDrawer from "@polotik/components/App/MobileDrawer.vue";
import AppBreadcrumbs from "@commen/breadcrumbs/components/Breadcrumbs.vue";
import AppMobileSubHeader from "@polotik/components/App/MobileSubHeader.vue";
import AppUserBox from "@polotik/components/App/UserBox.vue";
export default {
  components: {
    AppHeader,
    AppDrawer,
    AppMobileDrawer,
    AppBreadcrumbs,
    AppMobileSubHeader,
    AppUserBox,
  },
};
</script>
<style lang="scss" scoped>
.bg--color {
  background: #f0f1fa;
}
</style>
