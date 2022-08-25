import { mapActions, mapGetters, mapMutations } from "vuex";
import { planTypes } from "../store/types";
const PlanMixin = {
  computed: {
    ...mapGetters("admin/plan", ["plan", "planList"]),
    defaultDto() {
      let defaultDto = Object.create(this.plan);
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
    ...mapMutations("admin/plan", {
      setPlanStepByStep: planTypes.SET_PLAN_STEP_BY_STEP,
      setPlanDetailFormSchema: `dfrom/${planTypes.SET_FORM_SCHEMA}`,
      setPlanDetailFormModel: `dfrom/${planTypes.SET_FORM_MODEL}`,
    }),
  },
};
export default PlanMixin;
