<template>
  <filter-tabs service="مناقصه" @chage-active-tab="handleTab">
    <template #request-list>
      <RequestList @changePage="getAllTenderAsync(getAllRequestParams)" />
    </template>
    <template #request-list-user>
      <RequestList
        @changePage="getAllTenderAsync(getAllRequestUserParams)"
        pagination-type="paginationSelfItem"
      />
    </template>
    <template #request-list-user-offered>
      <RequestList
        @changePage="getAllTenderAsync(getAllRequestUserOfferedParams)"
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
