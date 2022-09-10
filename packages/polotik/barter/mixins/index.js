import Cookies from "js-cookie";
import moment from "moment-jalaali";
import Types from "@packages/polotik/barter/store/modules/root/types";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters, mapMutations } =
  createNamespacedHelpers("guilds/barter");

const BarterMixin = {
  data() {
    return {
      fromDate: "",
      editableBarter: {
        title: null,
        description: null,
        start: null,
        end: null,
        status: 1,
        data: {
          service: {
            requestedTitle: "",
            availableTitle: "",
            available: [],
            requested: [],
          },
          placeDelivery: null,
          price: null,
          place: null,
          amount: null,
          unit: null,
          category2: null,
          gallery: [],
          category: [],
          endDay: 1,
        },
      },
    };
  },
  computed: {
    ...mapGetters(["barter"]),
    currentUserId() {
      return Cookies.get("user-id");
    },
    remainingDays() {
      const currentDate = new Date().getDate();
      const dueDate = new Date(this.editableBarter.end).getDate();
      const remainDates = dueDate - currentDate;
      return `تا ${remainDates} روز دیگر`;
    },
    submitBtnColor() {
      if (this.route.includes("edit")) return "yellow darken-4";
      return "success";
    },
    barterId() {
      return this.$route.params.id;
    },
    route() {
      return this.$route.path;
    },
    fromDateRule() {
      const oneDay = 24 * 60 * 60 * 1000;
      const yesterday = moment(new Date() - oneDay).format("YYYY-MM-DD");
      const fromDateValidateResult =
        new Date(this.editableBarter.start) > new Date(yesterday);
      if (
        !fromDateValidateResult &&
        !this.showSubmitBtn &&
        !this.route.includes("edit")
      )
        return "تاریخ باید از امروز به بعد باشد";
      return true;
    },
    getEndDate() {
      const startDate = new Date(this.editableBarter.start);
      startDate.setDate(startDate.getDate() + this.editableBarter.data.endDay);
      return moment(startDate).format("YYYY-MM-DD");
    },
    calculateFromDate() {
      return moment(this.editableBarter.start).format("jYYYY/jMM/jDD");
    },
  },
  methods: {
    ...mapActions({
      createBarterAsync: Types.CREATE_BARTER_ASYNC,
      updateBarterAsync: Types.UPDATE_BARTER_ASYNC,
      getABarterAsync: Types.GET_ONE_BARTER_ASYNC,
    }),
    ...mapMutations({ toggleLoading: "TOGGLE_LOADING" }),
  },
};
export default BarterMixin;
