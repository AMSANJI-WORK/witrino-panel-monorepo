import Cookies from "js-cookie";
import moment from "moment-jalaali";

import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters, mapMutations } =
  createNamespacedHelpers("guilds/sale");
import Types from "@packages/polotik/sale/store/modules/root/types";
const SaleMixin = {
  data() {
    return {
      fromDate: "",
      endDate: "",
      editableSale: {
        title: null,
        description: null,
        start: null,
        end: null,
        status: 1,
        user_id: null,
        data: {
          gallery: [],
          docs: [],
          category: null,
          place: null,
          count: null,
          unit: null,
          amount: null,
          price: {
            limited: false,
            base: null,
            max: null,
            min: null,
            priceType: null,
            percent: {
              limited: false,
              max: null,
              min: null,
            },
          },
          participate: {
            public: false,
            userPanel: false,
            seeParticipantsInfo: false,
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters(["sale"]),
    ...mapGetters(["upload/successUploadedImages"]),
    currentUserId() {
      return Cookies.get("user-id");
    },
    remainingDays() {
      const currentDate = new Date().getDate();
      const dueDate = new Date(this.editableSale.end).getDate();
      const remainDates = dueDate - currentDate;
      return `تا ${remainDates} روز دیگر`;
    },
    submitBtnColor() {
      if (this.route.includes("edit")) return "yellow darken-4";
      return "success";
    },
    saleId() {
      return this.$route.params.id;
    },
    route() {
      return this.$route.path;
    },
    fromDateRule() {
      const oneDay = 24 * 60 * 60 * 1000;
      const yesterday = moment(new Date() - oneDay).format("YYYY-MM-DD");
      const fromDateValidateResult =
        new Date(this.editableSale.start) > new Date(yesterday);
      if (
        !fromDateValidateResult &&
        !this.showSubmitBtn &&
        !this.route.includes("edit")
      )
        return "تاریخ باید از امروز به بعد باشد";
      return true;
    },
    calculateFromDate() {
      return moment(this.editableSale.start).format("jYYYY/jMM/jDD HH:mm");
    },
    calculateEndDate() {
      return moment(this.editableSale.end).format("jYYYY/jMM/jDD HH:mm");
    },
  },
  methods: {
    ...mapActions({
      createSaleAsync: Types.CREATE_SALE_ASYNC,
      updateSaleAsync: Types.UPDATE_SALE_ASYNC,
      getASaleAsync: Types.GET_A_SALE_ASYNC,
    }),
    ...mapMutations({ toggleLoading: "TOGGLE_LOADING" }),
  },
};
export default SaleMixin;
