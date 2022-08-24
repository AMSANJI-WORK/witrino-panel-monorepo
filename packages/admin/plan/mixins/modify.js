import { mapActions, mapGetters } from "vuex";
import { planTypes } from "../store/types";
const PlanMixin = {
  data: () => ({
    modifyDto: {
      id: null,
      is_deleted: null,
      created_at: null,
      updated_at: null,
      created_id: null,
      updated_id: null,
      ip: null,
      is_viewed: null,
      is_active: null,
      title: null,
      description: null,
      price: null,
      duration: null,
      details: [],
    },
  }),
  computed: {
    ...mapGetters("admin/plan", ["plan", "planList"]),
    defaultDto() {
      let defaultDto = Object.create(this.modifyDto);
      Object.keys(defaultDto).forEach((key) => (defaultDto[key] = null));
      return defaultDto;
    },
    checkRoutePass() {
      return this.$route.fullPath.includes("edit");
    },
    submitBtnColor() {
      if (this.checkRoutePass) return "yellow darken-3";
      return "light-blue";
    },
    submitBtnText() {
      if (this.checkRoutePass) return "اعمال تغییرات";
      return "ثبت اطلاعات";
    },
  },
  methods: {
    ...mapActions("admin/plan", {
      getPlan: `get/${planTypes.GET_ONE_PLAN_ASYNC}`,
      getAllPlan: `get/${planTypes.GET_ALL_PLAN_ASYNC}`,
      createPlan: `create/${planTypes.CREATE_PLAN_ASYNC}`,
      updatePlan: `update/${planTypes.UPDATE_PLAN_ASYNC}`,
    }),
  },
};
export default PlanMixin;
