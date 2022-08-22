import Vue from "vue";
import { planTypes } from "@packages/admin/plan/store/types";
export default {
  [planTypes.DELETE_PLAN_SUCCESS](_, payload) {},
  [planTypes.DELETE_PLAN_FAILURE](_, error) {},
};
