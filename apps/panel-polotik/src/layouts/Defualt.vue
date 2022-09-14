<template>
  <v-app>
    <AppMobileDrawer
      active-class-list-group="p-green-primary--text"
      active-class-list-item="p-green-primary--text  boreder--bold"
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
              active-class-list-group="p-green-primary--text"
              active-class-list-item="p-green-primary--text  boreder--bold"
              :menuItems="menuItems"
              :drawerSectionTop="DrawerCardTop"
            />
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
import AppDrawerDesktop from "@commen/drawer/components/Desktop.vue";
import AppMobileDrawer from "@commen/drawer/components/Mobile.vue";
import AppBreadcrumbs from "@commen/breadcrumbs/components/Breadcrumbs.vue";
import AppMobileSubHeader from "@polotik/components/App/MobileSubHeader.vue";
import AppUserBox from "@polotik/components/App/UserBox.vue";
import menuItems from "@polotik/constants/menu";
import navigation from "@polotik/constants/data";
export default {
  components: {
    AppHeader,
    AppDrawerDesktop,
    AppMobileDrawer,
    AppBreadcrumbs,
    AppMobileSubHeader,
    AppUserBox,
  },
  data() {
    return {
      menuItems,
      navigation,
      DrawerCardTop: () => import("@polotik/components/App/DrawerCardTop.vue"),
    };
  },
};
</script>
<style lang="scss" scoped>
.bg--color {
  background: #f0f1fa;
}
</style>
