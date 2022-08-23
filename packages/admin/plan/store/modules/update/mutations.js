import Vue from "vue";
import router from "@witrino/router";

import { planTypes } from "@packages/admin/plan/store/types";
export default {
  [planTypes.UPDATE_PLAN_SUCCESS](_, payload) {
    if (router.currentRoute.path.includes("profile"))
      router.push(`/profile/${router.currentRoute.params.planId}`);
    else router.push("/admin/plan");
  },
  [planTypes.UPDATE_PLAN_FAILURE](_, error) {},
};
