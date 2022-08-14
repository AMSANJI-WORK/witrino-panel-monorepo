<template>
  <v-card-title class="d-flex flex-column justify-center d-md-none">
    <v-avatar size="150" class="ma-md-3 mx-auto">
      <img :src="require('@shared/assets/image/png/card-branch-avatar.png')" />
    </v-avatar>
    <v-sheet class="d-flex flex-column justify-center">
      <v-sheet class="d-flex flex-column align-center">
        <v-btn
          :color="user.is_activated | activeColor"
          class="my-2 white--text"
          x-small
        >
          {{ user.is_activated | activeToFa }}
          <v-icon right> mdi-label </v-icon>
        </v-btn>
        <h5 class="text-center font-weight-regular mb-5">
          {{ user.full_name }}
        </h5>
      </v-sheet>
      <v-sheet class="d-flex flex-column justify-center">
        <v-btn dark block color="light-blue" class="rounded-lg">
          <witrino-page />
          <span class="d-none d-xs-block"> &nbsp; صفحه ویترینو </span>
        </v-btn>
        <v-btn dark block color="pink-red" class="rounded-lg my-2">
          <polotik-page />
          <span class="d-none d-xs-block"> &nbsp; صفحه پلتیک </span>
          <span class="d-xs-none d-block"> &nbsp; پلتیک </span>
        </v-btn>
      </v-sheet>
    </v-sheet>
  </v-card-title>
</template>

<script>
import WitrinoPage from "@shared/components/Icons/WitrinoPage.vue";
import PolotikPage from "@shared/components/Icons/PolotikPage.vue";
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
