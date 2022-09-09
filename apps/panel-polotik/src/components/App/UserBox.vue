<template>
  <v-card
    class="user-box my-3 d-flex flex-column justify-center grey lighten-3"
    height="103"
    color="grey lighten-3"
    rounded="lg"
  >
    <v-card-subtitle class="py-1 font-weight-bold">
      <v-icon color="#fff" class="mx-1">mdi-basket</v-icon>تعداد محصول :
      {{ userInfo.numOfProducts | productCount }}
    </v-card-subtitle>
    <v-card-subtitle class="py-1 font-weight-bold">
      <v-icon color="#fff" class="mx-1">mdi-calendar-month-outline</v-icon>تاریخ
      عضویت : {{ userInfo.registerDate | dateToFa }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import Cookies from "js-cookie";
import moment from "moment-jalaali";
export default {
  computed: {
    ...mapGetters("auth", ["user"]),
    userInfo() {
      if (this.user.id !== null) return this.user;
      else
        return {
          numOfProducts: Cookies.get("num-of-products"),
          registerDate: Cookies.get("register-date"),
        };
    },
  },
  filters: {
    productCount(value) {
      if (!value || value === "undefined") return 0;
      return value;
    },
    dateToFa(value) {
      if (!value || value === "undefined")
        return moment(new Date()).format("jYYYY/jMM/jDD");
      return moment(value).format("jYYYY/jMM/jDD");
    },
  },
};
</script>

<style lang="scss" scoped>
.user-box {
  background: url(@commen/assets/image/svg/UserBoxBackground.svg) no-repeat;
  background-size: cover;
  color: #fff;
}
.user-box .v-card__subtitle,
.v-card__text {
  color: #fff;
}
</style>
