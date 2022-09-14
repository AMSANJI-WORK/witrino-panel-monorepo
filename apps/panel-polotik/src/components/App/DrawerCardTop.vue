<template>
  <v-sheet class="d-flex flex-column transparent" style="width: 100%">
    <v-sheet
      :class="`rounded-t-${$attrs.rounded} d-flex flex-column align-center`"
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
      <v-dialog v-model="dialog" max-width="300">
        <template v-slot:activator="{ on, attrs }">
          <v-avatar
            size="100"
            color="grey"
            class="my-2 v-sheet-avatar--offset"
            v-bind="attrs"
            v-on="on"
          >
            <img :src="userInfo.image" alt="alt" style="object-fit: cover" />
          </v-avatar>
        </template>
        <img :src="userInfo.image" alt="alt" style="object-fit: cover" />
      </v-dialog>
    </v-sheet>
    <v-sheet class="text-center mt-12 mb-2 transparent">
      <h4 class="my-1">{{ userInfo.company_name | campanyName }}</h4>
      <span class="my-1" style="font-size: 0.875rem; font-weight: 200">
        {{ userInfo.name | userName }}
      </span>
    </v-sheet>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  inheritAttrs: false,
  data() {
    return {
      dialog: false,
    };
  },
  filters: {
    campanyName: function (value) {
      return !value || value == undefined ? "" : value;
    },
    userName: function (value) {
      return !value || value == undefined ? "" : value;
    },
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    userInfo() {
      var storedUser = JSON.parse(localStorage.getItem("currentUser"));
      return this.user.id == null ? { ...storedUser } : { ...this.user };
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
