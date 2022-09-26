<template>
  <v-card-title class="d-flex flex-column justify-center d-md-none">
    <v-avatar size="150" class="ma-md-3 mx-auto">
      <img :src="require('@commen/assets/image/png/card-branch-avatar.png')" />
    </v-avatar>
    <v-sheet class="d-flex flex-column justify-center">
      <v-sheet class="d-flex flex-column align-center">
        <v-btn
          :color="user.is_active | activeColor"
          class="my-2 white--text"
          x-small
        >
          {{ user.is_active | activeToFa }}
          <v-icon right> mdi-label </v-icon>
        </v-btn>
        <h5 class="text-center font-weight-regular mb-5">
          {{ user.full_name }}
        </h5>
      </v-sheet>
    </v-sheet>
  </v-card-title>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  filters: {
    hireDate(value) {
      return moment(value).format("jD jMMMM jYYYY");
    },
    gender(value) {
      return value?.includes("w") ? "خانم" : "آقا";
    },
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
    ...mapGetters("admin/user", { user: "item" }),
  },
};
</script>

<style lang="scss" scoped></style>
