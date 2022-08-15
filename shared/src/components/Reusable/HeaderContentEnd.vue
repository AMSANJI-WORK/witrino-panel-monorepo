<template>
  <v-sheet elevation="0" class="transparent d-flex">
    <change-panel-drop-down class="d-none d-md-block" />
    <v-btn dark icon :ripple="false" class="d-md-flex ml-2 d-none">
      <v-badge dot overlap left color="error" offset-x="10" offset-y="10">
        <v-icon color="gray">mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>
    <v-btn
      icon
      dark
      link
      :to="`/profile/${userId}`"
      :ripple="false"
      class="d-md-flex ml-2 d-none"
    >
      <v-badge dot overlap left color="error" offset-x="10" offset-y="10">
        <v-icon color="gray">mdi-account-outline</v-icon>
      </v-badge>
    </v-btn>
  </v-sheet>
</template>

<script>
import ChangePanelDropDown from "@shared/components/ChangePanelDropDown.vue";
import Cookies from "js-cookie";
export default {
  components: {
    ChangePanelDropDown,
  },
  computed: {
    userId() {
      return Cookies.get("userId");
    },
  },
};
</script>

<style lang="scss" scoped></style>
