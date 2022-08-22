import Vue from "vue";
import router from "@witrino/router";
import { planTypes } from "@packages/admin/plan/store/types";
export default {
  [planTypes.CREATE_PLAN_SUCCESS](_, payload) {
    router.push("/admin/plan");
  },
  [planTypes.CREATE_PLAN_FAILURE](_, error) {},
};
