<template>
  <filter-tabs service="حراجی" @chage-active-tab="handleTab">
    <template #request-list>
      <RequestList @changePage="getAllSaleAsync(getAllRequestParams)" />
    </template>
    <template #request-list-user>
      <RequestList
        @changePage="getAllSaleAsync(getAllRequestUserParams)"
        pagination-type="paginationSelfItem"
      />
    </template>
    <template #request-list-user-offered>
      <RequestList
        @changePage="getAllSaleAsync(getAllRequestUserOfferedParams)"
        pagination-type="paginationSelfOffered"
      />
    </template>
  </filter-tabs>
</template>

<script>
import Cookies from "js-cookie";
import { mapActions } from "vuex";
import FilterTabs from "@polotik/components/Reusable/FilterTabs.vue";
import RequestList from "@commen/card/components/polotik/RequestList.vue";

export default {
  components: {
    FilterTabs,
    RequestList,
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
    ...mapActions("guilds/sale", {
      getAllSaleAsync: "GET_ALL_SALE_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllSaleAsync(this.getAllRequestParams);
          break;
        case 1:
          this.getAllSaleAsync(this.getAllRequestUserParams);
          break;
        case 2:
          this.getAllSaleAsync(this.getAllRequestUserOfferedParams);
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
