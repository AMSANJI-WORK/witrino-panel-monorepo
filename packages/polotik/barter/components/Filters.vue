<template>
  <filter-tabs service="تهاتر" @chage-active-tab="handleTab">
    <template #request-list>
      <RequestList @changePage="getAllBarterAsync(getAllRequestParams)"
    /></template>
    <template #request-list-user>
      <RequestList
        @changePage="getAllBarterAsync(getAllRequestUserParams)"
        pagination-type="paginationSelfItem"
      />
    </template>
    <template #request-list-user-offered>
      <RequestList
        @changePage="getAllBarterAsync(getAllRequestUserParams)"
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
    ...mapActions("guilds/barter", {
      getAllBarterAsync: "GET_ALL_BARTER_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllBarterAsync(this.getAllRequestParams);
          break;
        case 1:
          this.getAllBarterAsync(this.getAllRequestUserParams);
          break;
        case 2:
          this.getAllBarterAsync(this.getAllRequestUserOfferedParams);
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
