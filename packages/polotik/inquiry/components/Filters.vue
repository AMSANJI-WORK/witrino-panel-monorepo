<template>
  <filter-tabs service="استعلام" @chage-active-tab="handleTab">
    <template #request-list>
      <RequestList @changePage="getAllInquiryAsync(getAllRequestParams)" />
    </template>
    <template #request-list-user>
      <request-List
        @changePage="getAllInquiryAsync(getAllRequestUserParams)"
        pagination-type="paginationSelfItem"
      >
        <template #no-data>
          <span>هنوز هیچ درخواست استعلامی ایجاد نکرده اید</span>
        </template>
      </request-List>
    </template>
    <template #request-list-user-offered>
      <request-List
        @changePage="getAllInquiryAsync(getAllRequestUserParams)"
        pagination-type="paginationSelfOffered"
      >
        <template #no-data>
          <span>هنوز پیشنهادی ایجاد نکرده اید</span>
        </template>
      </request-List>
    </template>
    <template #btn-create-title>استعلام قیمت</template>
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
