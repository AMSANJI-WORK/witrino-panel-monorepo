<template>
  <filter-tabs service="استعلام" @chage-active-tab="handleTab">
    <template #request-list>
      <ProductAll @changePage="getAllInquiryAsync"
    /></template>
    <template #request-list-user>
      <ProductUser @changePage="getAllInquiryAsync({ currentUserId })" />
    </template>
    <template #request-list-user-offered>
      <ProductUserOffered @changePage="getAllInquiryAsync({ offerUserId })" />
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
    ...mapActions("guilds/inquiry", {
      getAllInquiryAsync: "GET_ALL_INQUIRY_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllInquiryAsync();
          break;
        case 1:
          this.getAllInquiryAsync({
            currentUserId: this.currentUserId,
          });
          break;
        case 2:
          this.getAllInquiryAsync({
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
