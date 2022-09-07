<template>
  <v-card-title class="d-md-flex d-none">
    <v-avatar size="150" class="ma-md-3 mx-auto">
      <img :src="require('@commen/assets/image/png/card-branch-avatar.png')" />
    </v-avatar>
    <v-sheet>
      <h4 class="font-weight-medium mb-5">{{ user.full_name }}</h4>

      <v-btn dark color="light-blue" class="rounded-lg">
        <witrino-page />
        &nbsp; صفحه ویترینو</v-btn
      >
      <v-btn dark color="pink-red" class="mx-3 rounded-lg">
        <polotik-page />
        &nbsp; صفحه پلتیک</v-btn
      >
    </v-sheet>
    <v-spacer></v-spacer>
    <v-sheet class="transparent d-flex flex-column align-content-start">
      <v-col>
        <v-btn
          :color="user.is_activated | activeColor"
          class="my-2 px-md-8 white--text"
          x-small
          >{{ user.is_activated | activeToFa }}</v-btn
        >
      </v-col>
      <v-col class="my-4"> </v-col>
    </v-sheet>
  </v-card-title>
</template>

<script>
import WitrinoPage from "@commen/icons/components/WitrinoPage.vue";
import PolotikPage from "@commen/icons/components/PolotikPage.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    WitrinoPage,
    PolotikPage,
  },
  filters: {
    activeToFa(value) {
      if (value) return "فعال";
      return "غیرفعال";
    },
    activeColor(value) {
      if (value) return "green";
      return "red";
    },
  },
  computed: {
    ...mapGetters("admin/user", ["user"]),
  },
};
</script>

<style lang="scss" scoped></style>
