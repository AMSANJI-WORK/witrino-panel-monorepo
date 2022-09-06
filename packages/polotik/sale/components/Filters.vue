<template>
  <filter-tabs service="حراجی" @chage-active-tab="handleTab">
    <template #request-list>
      <ProductAll @changePage="getAllSaleAsync"
    /></template>
    <template #request-list-user>
      <ProductUser @changePage="getAllSaleAsync({ currentUserId })" />
    </template>
    <template #request-list-user-offered>
      <ProductUserOffered @changePage="getAllSaleAsync({ offerUserId })" />
    </template>
  </filter-tabs>
</template>

<script>
import Cookies from "js-cookie";
import { mapActions } from "vuex";
import ProductAll from "./Product/All.vue";
import ProductUser from "./Product/_User.vue";
import ProductUserOffered from "./Product/_UserOffered.vue";
import FilterTabs from "@polotik/components/Reusable/FilterTabs.vue";

export default {
  components: {
    FilterTabs,
    ProductAll,
    ProductUser,
    ProductUserOffered,
  },

  computed: {
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
  methods: {
    ...mapActions("guilds/sale", {
      getAllSaleAsync: "GET_ALL_SALE_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllSaleAsync();
          break;
        case 1:
          this.getAllSaleAsync({
            currentUserId: this.currentUserId,
          });
          break;
        case 2:
          this.getAllSaleAsync({
            offerUserId: this.currentUserId,
          });
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
