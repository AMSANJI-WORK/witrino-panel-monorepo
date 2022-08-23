<template>
  <v-card width="100%" elevation="0" rounded="lg" class="pa-0" height="100%">
    <v-sheet class="d-flex flex-column transparent" style="width: 100%">
      <v-sheet
        :class="`rounded-t-${rounded} d-flex flex-column align-center`"
        color="red"
        width="100%"
        height="100%"
      >
        <v-rating
          :value="5"
          readonly
          color="yellow accent-4"
          class="v-sheet-rating--offset"
          dense
          half-increments
          size="18"
        ></v-rating>
        <v-avatar size="100" color="grey" class="my-2 v-sheet-avatar--offset">
          <img :src="userInfo.image" alt="alt" />
        </v-avatar>
      </v-sheet>
      <v-sheet class="text-center mt-12 mb-2 transparent">
        <h4 class="my-1">{{ userInfo.companyName }}</h4>
        <span class="my-1" style="font-size: 0.875rem; font-weight: 200">{{
          userInfo.name
        }}</span>
      </v-sheet>
    </v-sheet>

    <v-divider class="mb-2"></v-divider>
    <v-sheet class="pa-2">
      <v-list
        dense
        nav
        v-for="(item, i) in items"
        :key="i"
        v-show="item.visible === true"
        :disabled="item.disabled"
      >
        <v-list-item
          active-class="green--text"
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
          v-else
          no-action
          :disabled="item.disabled"
          active-class="green--text"
        >
          <template v-slot:activator>
            <v-list-item-action>
              <!-- class="mt-4 ml-4" -->
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            active-class="green--text  boreder--bold"
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
    </v-sheet>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import Cookies from "js-cookie";
import menuItems from "@polotik/constants/menu";
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
    };
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    userInfo() {
      if (this.user.id !== null) return this.user;
      else
        return {
          name: Cookies.get("user-name"),
          companyName: Cookies.get("company-name"),
          image: Cookies.get("image"),
        };
    },
  },
};
</script>

<style lang="scss" scoped>
.boreder--bold {
  border-right: solid 3px #187968;
}
.v-sheet-rating--offset,
.v-sheet-avatar--offset {
  position: relative;
}
.v-sheet-rating--offset {
  top: 2.3rem;
  position: relative;
}
.v-sheet-avatar--offset {
  top: 3.3rem;
  position: relative;
}
</style>
