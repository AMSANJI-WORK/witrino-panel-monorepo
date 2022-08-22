import Vue from "vue";
import { planTypes } from "@packages/admin/plan/store/types";
export default {
  [planTypes.GET_ALL_PLAN_SUCCESS](_, payload) {},
  [planTypes.GET_ALL_PLAN_FAILURE](_, error) {},
  [planTypes.GET_ONE_PLAN_SUCCESS](_, payload) {},
  [planTypes.GET_ONE_PLAN_FAILURE](_, error) {},
};
