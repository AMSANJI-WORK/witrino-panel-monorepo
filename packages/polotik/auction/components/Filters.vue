<template>
  <filter-tabs service="مزایده" @chage-active-tab="handleTab">
    <template #request-list>
      <ProductAll @changePage="getAllAuctionAsync"
    /></template>
    <template #request-list-user>
      <ProductUser @changePage="getAllAuctionAsync({ currentUserId })" />
    </template>
    <template #request-list-user-offered>
      <ProductUserOffered @changePage="getAllAuctionAsync({ offerUserId })" />
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
    offerUserId() {
      return this.currentUserId;
    },
  },
  methods: {
    ...mapActions("guilds/auction", {
      getAllAuctionAsync: "GET_ALL_AUCTION_ASYNC",
    }),
    handleTab(tab) {
      switch (tab) {
        case 0:
          this.getAllAuctionAsync();
          break;
        case 1:
          this.getAllAuctionAsync({
            currentUserId: this.currentUserId,
          });
          break;
        case 2:
          this.getAllAuctionAsync({
            offerUserId: this.currentUserId,
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
