<template>
  <v-card-text
    class="pa-1 grey lighten-3 d-flex align-center justify-center rounded-lg"
  >
    {{ userAddressList.length | isZero }}
    <v-btn
      color="grey"
      dark
      icon
      fab
      text
      class="rounded-circle"
      @click="toggle"
    >
      <v-icon large>mdi-plus</v-icon>
    </v-btn>
  </v-card-text>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    toggle: {
      type: Function,
      required: true,
    },
  },
  filters: {
    isZero(value) {
      return value == 0 ? "هیچ آدرسی ثبت نشده" : "ثبت آدرس جدید";
    },
  },
  computed: {
    ...mapGetters("admin/user/address", ["userAddressList"]),
  },
};
</script>

<style lang="scss" scoped></style>
