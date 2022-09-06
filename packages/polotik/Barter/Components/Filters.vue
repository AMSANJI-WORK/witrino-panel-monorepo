<template>
  <filter-tabs service="تهاتر" @chage-active-tab="handleTab">
    <template #request-list>
      <ProductAll @changePage="getAllBarterAsync"
    /></template>
    <template #request-list-user>
      <ProductUser @changePage="getAllBarterAsync({ currentUserId })" />
    </template>
    <template #request-list-user-offered>
      <ProductUserOffered @changePage="getAllBarterAsync({ offerUserId })" />
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
    ...mapActions("guilds/barter", {
      getAllBarterAsync: "GET_ALL_BARTER_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllBarterAsync();
          break;
        case 1:
          this.getAllBarterAsync({
            currentUserId: this.currentUserId,
          });
          break;
        case 2:
          this.getAllBarterAsync({
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
