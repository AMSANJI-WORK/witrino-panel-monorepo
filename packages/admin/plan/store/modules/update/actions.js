import router from "@witrino/router";
import { planTypes } from "@packages/admin/plan/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [planTypes.UPDATE_PLAN_ASYNC]({ commit }, payload) {
    try {
      let id;
      delete payload.password;
      if (router.currentRoute.path.includes("profile"))
        id = router.currentRoute.params?.planId;
      else id = router.currentRoute.params?.id;
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.updatePlan(id, payload);
      commit(`admin/plan/${planTypes.UPDATE_PLAN}`, data.data[0], {
        root: true,
      });
      commit(planTypes.UPDATE_PLAN_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(planTypes.UPDATE_PLAN_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
