import { planTypes } from "@packages/admin/plan/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [planTypes.DELETE_PLAN_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await baseRepository.deletePlan(payload);
      commit(`admin/plan/${planTypes.DELETE_PLAN}`, payload, { root: true });
      commit(planTypes.DELETE_PLAN_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(planTypes.DELETE_PLAN_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
