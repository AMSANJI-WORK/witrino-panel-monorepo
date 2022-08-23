import { planTypes } from "@packages/admin/plan/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [planTypes.DISABLE_PLAN_ASYNC]({ commit }, { id, updated_id }) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.disablePlan(id, { updated_id });
      commit(`admin/plan/${planTypes.DISABLE_PLAN}`, id, { root: true });
      commit(planTypes.DISABLE_PLAN_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(planTypes.DISABLE_PLAN_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
