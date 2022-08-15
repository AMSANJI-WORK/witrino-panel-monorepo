<template>
  <v-card-title class="d-md-flex d-none">
    <v-avatar size="150" class="ma-md-3 mx-auto">
      <img :src="require('@shared/assets/image/png/card-branch-avatar.png')" />
    </v-avatar>
    <v-sheet>
      <h4 class="font-weight-regular mb-5">{{ user.full_name }}</h4>
    </v-sheet>
    <v-spacer></v-spacer>
    <v-sheet class="transparent d-flex flex-column align-content-start">
      <v-col>
        <v-btn
          :color="user.is_active | activeColor"
          class="my-2 px-md-8 white--text"
          x-small
          >{{ user.is_active | activeToFa }}</v-btn
        >
      </v-col>
      <v-col class="my-4"> </v-col>
    </v-sheet>
  </v-card-title>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("admin/user", ["user"]),
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
};
</script>

<style lang="scss" scoped></style>
