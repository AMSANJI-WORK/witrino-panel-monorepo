import { planTypes } from "@packages/admin/plan/store/types";

export default {
  [planTypes.SET_PLAN](state, payload) {
    Object.assign(state.plan, payload);
  },
  [planTypes.SET_PLAN_STEP_BY_STEP](state, payload) {
    Object.keys(payload).forEach((key) => (state.plan[key] = payload[key]));
    console.log(state.plan);
  },
  [planTypes.SET_PLAN_DETAILS](state, payload) {
    state.plan.details = [...state.plan.details,payload];
    state.plan.details = [...new Set(state.plan.details)];
    console.log(state.plan);
  },
  [planTypes.SET_PLAN_LIST](state, payload) {
    state.planList = [...payload.data];
  },
  [planTypes.CRAETE_PLAN](state, payload) {
    state.planList = [...state.planList, payload];
  },
  [planTypes.UPDATE_PLAN](state, payload) {
    const targetIndex = state.planList.findIndex(
      (plan) => plan.id == payload.id
    );
    Object.assign(state.planList[targetIndex], payload);
  },
  [planTypes.DELETE_PLAN](state, payload) {
    let targetIndex = state.planList.findIndex((plan) => plan.id === payload);
    state.planList.splice(targetIndex, 1);
  },
  [planTypes.DISABLE_PLAN](state, payload) {
    let targetIndex = state.planList.findIndex((plan) => plan.id === payload);
    state.planList.splice(targetIndex, 1);
  },
};
