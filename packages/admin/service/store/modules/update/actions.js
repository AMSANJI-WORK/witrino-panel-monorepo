import router from "@witrino/router";
import { serviceTypes } from "@packages/admin/service/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [serviceTypes.UPDATE_SERVICE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await baseRepository.updateService(payload.id, payload);
      commit(`admin/service/${serviceTypes.UPDATE_SERVICE}`, data.data[0], {
        root: true,
      });
      commit(serviceTypes.UPDATE_SERVICE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(serviceTypes.UPDATE_SERVICE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
