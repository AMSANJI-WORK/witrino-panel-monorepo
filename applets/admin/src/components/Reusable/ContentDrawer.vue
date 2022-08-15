<template>
  <v-card width="100%" elevation="0" rounded="lg" class="pt-2" height="100%">
    <!-- color="dark-primery" -->
    <v-sheet
      class="rounded-t-xl ma-3 d-flex flex-column align-center sheet--boreder-bottom sheet--background"
      height="250"
      elevation="5"
    >
      <div
        class="d-flex flex-column align-center text-center my-auto"
        style="width: 100%"
      >
        <WLogo />
        <h4 class="mb-1 mt-4 white--text">پنل ادمین ویترینو</h4>
      </div>
    </v-sheet>

    <v-divider class="mb-2"></v-divider>
    <div class="pa-2">
      <v-list
        nav
        dense
        exact
        v-for="(item, i) in items"
        :key="i"
        v-show="item.visible === true"
        :disabled="item.disabled"
        class="py-1"
      >
        <v-list-item
          active-class="white--text primery active-icon"
          v-if="!item.child"
          v-show="item.visible === true"
          :disabled="item.disabled"
          router
          :to="item.route"
        >
          <v-list-item-action>
            <v-icon color="dark">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          active-class="white--text primery active-icon"
          v-else
          no-action
          :disabled="item.disabled"
        >
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon color="dark">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            active-class="white--text primery--text active-icon  boreder--bold"
            v-for="childern in item.child"
            :key="childern.id"
            router
            v-show="childern.visible === true"
            :disabled="childern.disabled"
            :to="childern.route"
            class="pr-14"
          >
            <v-list-item-title>{{ childern.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
  </v-card>
</template>

<script>
import menuItems from "@applets/admin/src/constants/menu";
import WLogo from "@shared/components/Icons/Admin/Logo.vue";
export default {
  components: { WLogo },
  props: {
    rounded: {
      type: String,
      default: "lg",
    },
  },
  data() {
    return {
      items: menuItems,
      user: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.boreder--bold {
  border-right: solid 3px #e69d2f;
}
.active-icon {
  i.v-icon.v-icon {
    color: #fff !important;
  }
}
.sheet--background {
  background: linear-gradient(51deg, #1e1e1e9e, #1e1e22);
}
.sheet--boreder-bottom {
  border-bottom-left-radius: 75px;
  border-bottom-right-radius: 75px;
}
</style>
