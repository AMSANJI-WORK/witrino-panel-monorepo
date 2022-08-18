<template>
  <filter-tabs service="استعلام" @chage-active-tab="handleTab">
    <template #list-content>
      <all-product @changePage="getAllInquiryAsync"
    /></template>
    <template #list-mine-content>
      <user-product @changePage="getAllInquiryAsync({ currentUserId })" />
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
    ...mapActions("guilds/inquiry", {
      getAllInquiryAsync: "GET_ALL_INQUIRY_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllInquiryAsync();
          break;
        case 1:
          this.getAllInquiryAsync({ currentUserId: this.currentUserId });
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
