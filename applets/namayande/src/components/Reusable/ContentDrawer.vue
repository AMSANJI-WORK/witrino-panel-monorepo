<template>
  <v-card
    width="100%"
    elevation="0"
    rounded="lg"
    class="pt-2"
    height="100%"
    v-once
  >
    <v-sheet
      class="rounded-t-xl ma-3 d-flex flex-column align-center sheet--background-image sheet--boreder-bottom"
      color="#595CFF"
      height="250"
      elevation="5"
    >
      <v-avatar size="100" class="mt-6">
        <img
          :src="require('@commen/assets/image/png/card-branch-avatar.png')"
        />
      </v-avatar>
      <v-sheet class="text-center mt-5 mb-2 transparent">
        <h4 class="my-1 white--text">گروه تولیدی و صنعتی حسام</h4>
        <span
          class="mt-1 mb-4 yellow--text darken-1"
          style="font-size: 0.875rem; font-weight: 200"
          >محمد مهدی حیاتی</span
        >
      </v-sheet>
    </v-sheet>

    <v-divider class="mb-2"></v-divider>
    <div class="pt-2 px-2 pb-md-10">
      <v-list
        dense
        nav
        exact
        class="py-1"
        v-for="(item, i) in items"
        :key="i"
        v-show="item.visible === true"
        :disabled="item.disabled"
      >
        <v-list-item
          active-class="white--text indigo darken-4 active-icon"
          v-if="!item.child"
          v-show="item.visible === true"
          :disabled="item.disabled"
          router
          :to="item.route"
        >
          <v-list-item-action>
            <!-- class="mt-4 ml-4" -->
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <!-- style="color: #e1e3e5" -->
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          active-class="white--text indigo darken-4 active-icon"
          v-else
          no-action
          :disabled="item.disabled"
        >
          <template v-slot:activator>
            <v-list-item-action>
              <!-- class="mt-4 ml-4" -->
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            active-class="indigo darken-4--text active-icon  boreder--bold"
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
import menuItems from "@applets/namayande/src/constants/menu";
export default {
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
  border-right: solid 3px #2d2e97;
}
.active-icon {
  i.v-icon.v-icon {
    color: #fff !important;
  }
}

.sheet--boreder-bottom {
  border-bottom-left-radius: 75px;
  border-bottom-right-radius: 75px;
}
.sheet--background-image {
  background: url(@commen/assets/image/svg/SofaDrawerBackground.svg) no-repeat
    bottom left;
}
</style>
