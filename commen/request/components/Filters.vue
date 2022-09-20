<template>
  <filter-tabs :service="serviceNameFa" @chage-active-tab="handleTab">
    <template #request-list>
      <RequestList @changePage="requestGetAll(getAllRequestParams)" />
    </template>
    <template #request-list-user>
      <request-list
        @changePage="requestGetAll(getAllRequestUserParams)"
        pagination-type="paginationSelfItem"
      >
        <template #no-data>
          <span
            >هنوز هیچ درخواست {{ `${serviceNameFa}ی` }} ایجاد نکرده اید</span
          >
        </template>
      </request-list>
    </template>
    <template #request-list-user-offered>
      <request-list
        @changePage="requestGetAll(getAllRequestUserOfferedParams)"
        pagination-type="paginationSelfOffered"
      >
        <template #no-data>
          <span>هنوز پیشنهادی ایجاد نکرده اید</span>
        </template>
      </request-list>
    </template>
  </filter-tabs>
</template>

<script>
import Cookies from "js-cookie";
import RequestList from "./RequestList.vue";
import FilterTabs from "./FilterTabs.vue";
import CommenMixin from "../mixins/commen";
export default {
  components: {
    FilterTabs,
    RequestList,
  },
  mixins: [CommenMixin],
  computed: {
    serviceNameFa() {
      switch (this.activeService) {
        case "barter":
          return "تهاتر";
        case "tender":
          return "مناقصه";
        case "auction":
          return "مزایده";
        case "inquiry":
          return "استعلام";
        case "sales":
          return "حراجی";
        default:
          return "";
      }
    },
    userId() {
      return Number(Cookies.get("user-id"));
    },
    getAllRequestParams() {
      return {
        userId: null,
        offerUserId: null,
        service: this.activeService,
        target: "pagination",
      };
    },
    getAllRequestUserParams() {
      return {
        userId: this.userId,
        offerUserId: null,
        service: this.activeService,
        target: "paginationSelfItem",
      };
    },
    getAllRequestUserOfferedParams() {
      return {
        userId: null,
        offerUserId: this.userId,
        service: this.activeService,
        target: "paginationSelfOffered",
      };
    },
  },
  methods: {
    requestGetAll(payload) {
      this.$store.dispatch(`${this.activeService}/GET_ALL_ASYNC`, payload);
    },

    handleTab(tab) {
      switch (tab) {
        case 0:
          this.requestGetAll(this.getAllRequestParams);
          break;
        case 1:
          this.requestGetAll(this.getAllRequestUserParams);
          break;
        case 2:
          this.requestGetAll(this.getAllRequestUserOfferedParams);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
