<template>
  <filter-tabs service="مناقصه" @chage-active-tab="handleTab">
    <template #request-list>
      <ProductAll @changePage="getAllTenderAsync"
    /></template>
    <template #request-list-user>
      <ProductUser @changePage="getAllTenderAsync({ currentUserId })" />
    </template>
    <template #request-list-user-offered>
      <ProductUserOffered @changePage="getAllTenderAsync({ offerUserId })" />
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
    ...mapActions("guilds/tender", {
      getAllTenderAsync: "GET_ALL_TENDER_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllTenderAsync();
          break;
        case 1:
          this.getAllTenderAsync({
            currentUserId: this.currentUserId,
          });
          break;
        case 2:
          this.getAllTenderAsync({
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
