<template>
  <v-card width="100%" elevation="0" rounded="lg" class="pa-0" height="100%">
    <slot name="drawer-top" />
    <v-divider class="mb-2"></v-divider>
    <v-sheet class="pa-2">
      <v-list
        dense
        nav
        v-for="(item, i) in menuItems"
        :key="i"
        v-show="item.visible === true"
        :disabled="item.disabled"
      >
        <v-list-item
          :active-class="listGroupActiveClass"
          v-if="!item.child"
          v-show="item.visible === true"
          :href="item.href"
          link
          :disabled="item.disabled"
          router
          :to="item.route"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          v-else
          no-action
          :disabled="item.disabled"
          :active-class="listGroupActiveClass"
        >
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            :active-class="listItemActiveClass"
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
export default {
  props: {
    menuItems: Array,
    listGroupActiveClass: String,
    listItemActiveClass: String,
    rounded: {
      type: String,
      default: "lg",
    },
  },
};
</script>
