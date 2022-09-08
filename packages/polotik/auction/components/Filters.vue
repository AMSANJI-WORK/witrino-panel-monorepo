<template>
  <filter-tabs service="مزایده" @chage-active-tab="handleTab">
    <template #request-list>
      <RequestList @changePage="getAllAuctionAsync(getAllRequestParams)" />
    </template>
    <template #request-list-user>
      <RequestList
        @changePage="getAllAuctionAsync(getAllRequestUserParams)"
        pagination-type="paginationSelfItem"
      />
    </template>
    <template #request-list-user-offered>
      <RequestList
        @changePage="getAllAuctionAsync(getAllRequestUserOfferedParams)"
        pagination-type="paginationSelfOffered"
      />
    </template>
  </filter-tabs>
</template>

<script>
import Cookies from "js-cookie";
import { mapActions } from "vuex";
import RequestList from "@commen/card/components/polotik/RequestList.vue";
import FilterTabs from "@polotik/components/Reusable/FilterTabs.vue";
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
    ...mapActions("guilds/auction", {
      getAllAuctionAsync: "GET_ALL_AUCTION_ASYNC",
    }),
    handleTab(tab) {
      switch (tab) {
        case 0:
          this.getAllAuctionAsync(this.getAllRequestParams);
          break;
        case 1:
          this.getAllAuctionAsync(this.getAllRequestUserParams);
          break;
        case 2:
          this.getAllAuctionAsync(this.getAllRequestUserOfferedParams);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
