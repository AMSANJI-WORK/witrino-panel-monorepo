import { serviceTypes } from "@packages/admin/service/store/types";
import { planTypes } from "@packages/admin/plan/store/types";
import { mapActions, mapGetters, mapMutations } from "vuex";
const PlanMixin = {
  computed: {
    ...mapGetters("admin/plan", ["item", "list"]),
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
      getPlan: planTypes.GET_ONE_ASYNC,
      getAllPlan: planTypes.GET_ALL_ASYNC,
      createPlan: planTypes.CREATE_ASYNC,
      updatePlan: planTypes.UPDATE_ASYNC,
    }),
    ...mapActions("admin/service", {
      getAllService: serviceTypes.GET_ALL_ASYNC,
    }),
    ...mapMutations("admin/plan", {
      setPlanStepByStep: planTypes.SET_PLAN_STEP_BY_STEP,
      setDetailForm: `dfrom/${planTypes.SET_FORM_SCHEMA}`,
    }),
  },
};
export default PlanMixin;
