<template>
  <filter-tabs service="مناقصه" @chage-active-tab="handleTab">
    <template #request-list>
      <ProductAll @changePage="getAllTenderAsync(getAllRequestParams)"
    /></template>
    <template #request-list-user>
      <ProductUser @changePage="getAllTenderAsync(getAllRequestUserParams)" />
    </template>
    <template #request-list-user-offered>
      <ProductUserOffered
        @changePage="getAllTenderAsync(getAllRequestUserOfferedParams)"
      />
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
    userId() {
      return Number(Cookies.get("user-id"));
    },
    getAllRequestParams() {
      return {
        userId: null,
        offerUserId: null,
        target: "pagination",
      };
    },
    getAllRequestUserParams() {
      return {
        userId: this.userId,
        offerUserId: null,
        target: "paginationSelfItem",
      };
    },
    getAllRequestUserOfferedParams() {
      return {
        userId: null,
        offerUserId: this.userId,
        target: "paginationSelfOffered",
      };
    },
  },
  methods: {
    ...mapActions("guilds/tender", {
      getAllTenderAsync: "GET_ALL_TENDER_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllTenderAsync(this.getAllRequestParams);
          break;
        case 1:
          this.getAllTenderAsync(this.getAllRequestUserParams);
          break;
        case 2:
          this.getAllTenderAsync(this.getAllRequestUserOfferedParams);
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
