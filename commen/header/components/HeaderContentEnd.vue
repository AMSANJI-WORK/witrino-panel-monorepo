<template>
  <v-sheet elevation="0" class="transparent d-flex">
    <ChangePanelDropDown class="d-none d-md-block" />
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          dark
          icon
          :ripple="false"
          class="d-md-flex d-none"
        >
          <v-badge dot overlap left color="error" offset-x="10" offset-y="10">
            <v-icon color="gray">mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <span class="text-caption white--text">پیام ها</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
          dark
          link
          :to="`${routeActive}/profile/${userId}`"
          :ripple="false"
          class="d-md-flex d-none"
        >
          <v-icon color="gray">mdi-account-outline</v-icon>
        </v-btn>
      </template>
      <span class="text-caption white--text">پروفایل</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          dark
          v-bind="attrs"
          v-on="on"
          link
          to="/auth/logout"
          :ripple="false"
          class="d-md-flex d-none"
        >
          <v-icon color="gray">mdi-power</v-icon>
        </v-btn>
      </template>
      <span class="text-caption white--text">خروج</span>
    </v-tooltip>
  </v-sheet>
</template>

<script>
import ChangePanelDropDown from "./ChangePanelDropDown.vue";
export default {
  components: {
    ChangePanelDropDown,
  },
  computed: {
    userId() {
      return JSON.parse(localStorage.getItem("userId"));
    },
    routeActive() {
      return this.$route.matched[0].path;
    },
  },
};
</script>

<style lang="scss" scoped></style>
