<template>
  <v-card elevation="0" :loading="fromLoading">
    <product
      v-for="sale in userSales"
      :data-source="sale"
      :key="sale.id"
      :current-user-id="currentUserId"
    />
    <div class="d-flex pa-2 mt-2">
      <v-spacer></v-spacer>
      <v-pagination
        v-model="userPagination.page"
        :length="userPagination.lastPage"
        :total-visible="6"
      ></v-pagination>
      <v-spacer></v-spacer>
      <div class="my-auto grey--text font-weight-thin">
        تعداد (کل) : {{ userPagination.recordCount }}
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FormMixin from "@shared/mixins/form";
import Cookies from "js-cookie";
import Product from "./index.vue";

export default {
  components: { Product },
  mixins: [FormMixin],
  watch: {
    "userPagination.page": function (newValue) {
      this.$emit("changePage");
    },
  },
  computed: {
    ...mapGetters({
      userPagination: "selfItemPagination",
      userSales: "guilds/sale/allSales",
    }),
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
};
</script>

<style lang="scss" scoped></style>
