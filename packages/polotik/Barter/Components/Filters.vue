<template>
  <filter-tabs service="تهاتر" @chage-active-tab="handleTab">
    <template #list-content>
      <all-product @changePage="getAllBarterAsync"
    /></template>
    <template #list-mine-content>
      <user-product @changePage="getAllBarterAsync({ currentUserId })" />
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
    ...mapActions("guilds/barter", {
      getAllBarterAsync: "GET_ALL_BARTER_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllBarterAsync();
          break;
        case 1:
          this.getAllBarterAsync({ currentUserId: this.currentUserId });
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
