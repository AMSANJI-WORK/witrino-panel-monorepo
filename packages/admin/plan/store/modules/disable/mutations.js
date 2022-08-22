import Vue from "vue";
import { planTypes } from "@packages/admin/plan/store/types";
export default {
  [planTypes.DISABLE_PLAN_SUCCESS](_, payload) {},
  [planTypes.DISABLE_PLAN_FAILURE](_, error) {},
};
