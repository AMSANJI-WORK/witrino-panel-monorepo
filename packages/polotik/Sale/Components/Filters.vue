<template>
  <filter-tabs service="حراجی" @chage-active-tab="handleTab">
    <template #list-content>
      <all-product @changePage="getAllSaleAsync"
    /></template>
    <template #list-mine-content>
      <user-product @changePage="getAllSaleAsync({ currentUserId })" />
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
    ...mapActions("guilds/sale", {
      getAllSaleAsync: "GET_ALL_SALE_ASYNC",
    }),
    handleTab(newValue) {
      switch (newValue) {
        case 0:
          this.getAllSaleAsync();
          break;
        case 1:
          this.getAllSaleAsync({ currentUserId: this.currentUserId });
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .v-slide-group__content {
    display: flex;
    flex: 1 0 auto;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    white-space: nowrap;
    margin-right: 1rem;
  }
}
.v-window__container {
  display: flex;
  flex-direction: column;
  height: inherit;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  padding-bottom: 0px;
  max-height: 600px;
  overflow-y: auto;
}
</style>
