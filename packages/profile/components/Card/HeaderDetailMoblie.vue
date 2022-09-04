<template>
  <v-card-title class="d-flex flex-column justify-center d-md-none">
    <v-avatar size="150" class="ma-md-3 mx-auto">
      <img :src="require('@shared/assets/image/png/card-branch-avatar.png')" />
    </v-avatar>
    <v-sheet class="d-flex flex-wrap justify-center">
      <v-sheet
        class="d-flex flex-sm-wrap flex-column justify-center align-center"
      >
        <h5 class="text-center mx-3 font-weight-medium">
          {{ user.full_name }}
        </h5>
        <v-btn
          :color="user.is_activated | activeColor"
          class="my-2 white--text"
          x-small
        >
          {{ user.is_activated | activeToFa }}
          <v-icon right> mdi-label </v-icon>
        </v-btn>
      </v-sheet>
      <v-sheet class="d-flex flex-wrap justify-center" width="100%">
        <v-col cols="12" sm="6" class="pb-0 pl-0">
          <v-btn dark color="light-blue" class="rounded-lg" width="100%">
            <witrino-page />
            <span class="d-none d-xs-block"> &nbsp; صفحه ویترینو </span>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" class="pl-0">
          <v-btn dark color="pink-red" class="rounded-lg" width="100%">
            <polotik-page />
            <span class="d-none d-xs-block"> &nbsp; صفحه پلتیک </span>
            <span class="d-xs-none d-block"> &nbsp; پلتیک </span>
          </v-btn>
        </v-col>
      </v-sheet>
    </v-sheet>
  </v-card-title>
</template>

<script>
import { mapGetters } from "vuex";
import WitrinoPage from "@commen/icons/components/WitrinoPage.vue";
import PolotikPage from "@commen/icons/components/PolotikPage.vue";
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
