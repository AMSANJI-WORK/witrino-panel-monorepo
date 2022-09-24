import Cookies from "js-cookie";
import moment from "moment-jalaali";

import { mapActions, mapGetters } from "vuex";
import Types from "@applets/polotik/inquiry/store/modules/root/types";
const InquiryMixin = {
  data() {
    return {
      fromDate: "",
      editableInquiry: {
        title: null,
        description: null,
        start: null,
        end: null,
        status: 1,
        data: {
          gallery: [],
          category: [],
          count: 0,
          unit: null,
          amount: null,
          endDay: 1,
          placeDelivery: null,
        },
        user_offer: [],
        offers: {
          count: null,
          page: null,
          last_page: null,
          data: [],
        },
        user_id: null,
      },
    };
  },
  computed: {
    ...mapGetters("inquiry", ["item"]),
    currentUserId() {
      return Cookies.get("user-id");
    },
    remainingDays() {
      const currentDate = new Date().getDate();
      const dueDate = new Date(this.editableInquiry.end).getDate();
      const remainDates = dueDate - currentDate;
      return `تا ${remainDates} روز دیگر`;
    },
    submitBtnColor() {
      if (this.route.includes("edit")) return "yellow darken-4";
      return "success";
    },
    inquiryId() {
      return this.$route.params.id;
    },
    route() {
      return this.$route.path;
    },
    fromDateRule() {
      const oneDay = 24 * 60 * 60 * 1000;
      const yesterday = moment(new Date() - oneDay).format("YYYY-MM-DD");
      const fromDateValidateResult =
        new Date(this.editableInquiry.start) > new Date(yesterday);
      if (
        !fromDateValidateResult &&
        !this.showSubmitBtn &&
        !this.route.includes("edit")
      )
        return "تاریخ باید از امروز به بعد باشد";
      return true;
    },
    getEndDate() {
      const startDate = new Date(this.editableInquiry.start);
      startDate.setDate(startDate.getDate() + this.editableInquiry.data.endDay);
      return moment(startDate).format("YYYY-MM-DD");
    },
    calculateFromDate() {
      return moment(this.editableInquiry.start).format("jYYYY/jMM/jDD");
    },
  },
  methods: {
    ...mapActions("inquiry", {
      createInquiryAsync: Types.CREATE_ASYNC,
      updateInquiryAsync: Types.UPDATE_ASYNC,
      getAnInquiryAsync: Types.GET_ONE_ASYNC,
    }),
  },
};
export default InquiryMixin;
