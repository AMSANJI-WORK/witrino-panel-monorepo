import { serviceTypes } from "@packages/admin/service/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [serviceTypes.GET_ALL_SERVICE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.getService(payload);
      commit(`admin/service/${serviceTypes.SET_SERVICE_LIST}`, data.data, {
        root: true,
      });
      commit(serviceTypes.GET_ALL_SERVICE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(serviceTypes.GET_ALL_SERVICE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
  async [serviceTypes.GET_ONE_SERVICE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.getService(payload);
      commit(`admin/service/${serviceTypes.SET_SERVICE}`, data.data[0], {
        root: true,
      });
      commit(serviceTypes.GET_ONE_SERVICE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(serviceTypes.GET_ONE_SERVICE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};