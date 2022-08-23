import { planTypes } from "@packages/admin/plan/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");
export default {
  async [planTypes.CREATE_PLAN_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.createPlan(payload);
      commit(`admin/plan/${planTypes.CRAETE_PLAN}`, data.data[0], {
        root: true,
      });
      commit(planTypes.CREATE_PLAN_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(planTypes.CREATE_PLAN_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
