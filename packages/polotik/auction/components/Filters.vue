<template>
  <filter-tabs service="مزایده" @chage-active-tab="handleTab">
    <template #list-content>
      <all-product @changePage="getAllAuctionAsync"
    /></template>
    <template #list-mine-content>
      <user-product @changePage="getAllAuctionAsync({ currentUserId })" />
    </template>
    <template #list-mine-request></template>
  </filter-tabs>
</template>

<script>
import Cookies from "js-cookie";
import { mapActions } from "vuex";
import AllProduct from "./Product/All.vue";
import UserProduct from "./Product/_User.vue";
import FilterTabs from "@polotik/components/Reusable/FilterTabs.vue";
export default {
  components: {
    FilterTabs,
    AllProduct,
    UserProduct,
  },
  computed: {
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
  methods: {
    ...mapActions("guilds/auction", {
      getAllAuctionAsync: "GET_ALL_AUCTION_ASYNC",
    }),
    handleTab(tab) {
      switch (tab) {
        case 0:
          this.getAllAuctionAsync({
            target: "pagination",
            currentUserId: null,
          });
          break;
        case 1:
          this.getAllAuctionAsync({
            target: "paginationSelfItem",
            currentUserId: this.currentUserId,
          });
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
