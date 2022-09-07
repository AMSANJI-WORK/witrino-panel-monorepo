<template>
  <filter-tabs service="استعلام" @chage-active-tab="handleTab">
    <template #request-list>
      <ProductAll @changePage="getAllInquiryAsync(getAllRequestParams)"
    /></template>
    <template #request-list-user>
      <ProductUser @changePage="getAllInquiryAsync(getAllRequestUserParams)" />
    </template>
    <template #request-list-user-offered>
      <ProductUserOffered
        @changePage="getAllInquiryAsync(getAllRequestUserOfferedParams)"
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
    ...mapActions("guilds/inquiry", {
      getAllInquiryAsync: "GET_ALL_INQUIRY_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllInquiryAsync(this.getAllRequestParams);
          break;
        case 1:
          this.getAllInquiryAsync(this.getAllRequestUserParams);
          break;
        case 2:
          this.getAllInquiryAsync(this.getAllRequestUserOfferedParams);
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
