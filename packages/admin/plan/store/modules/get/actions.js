import { planTypes } from "@packages/admin/plan/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [planTypes.GET_ALL_PLAN_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.getPlan(payload);
      commit(`admin/plan/${planTypes.SET_PLAN_LIST}`, data.data, {
        root: true,
      });
      commit(planTypes.GET_ALL_PLAN_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(planTypes.GET_ALL_PLAN_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
  async [planTypes.GET_ONE_PLAN_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.getPlan(payload);
      commit(`admin/plan/${planTypes.SET_PLAN}`, data.data[0], {
        root: true,
      });
      commit(planTypes.GET_ONE_PLAN_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(planTypes.GET_ONE_PLAN_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
