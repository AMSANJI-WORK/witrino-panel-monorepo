<template>
  <filter-tabs service="مناقصه" @chage-active-tab="handleTab">
    <template #list-content>
      <all-product @changePage="getAllTenderAsync" />
    </template>
    <template #list-mine-content>
      <user-product @changePage="getAllTenderAsync({ currentUserId })" />
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
    ...mapActions("guilds/tender", {
      getAllTenderAsync: "GET_ALL_TENDER_ASYNC",
    }),
    handleTab(tab) {
      switch (tab) {
        case 0:
          this.getAllTenderAsync();
          break;
        case 1:
          this.getAllTenderAsync({ currentUserId: this.currentUserId });
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
