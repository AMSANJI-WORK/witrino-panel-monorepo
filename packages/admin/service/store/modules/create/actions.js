import { serviceTypes } from "@packages/admin/service/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");
export default {
  async [serviceTypes.CREATE_SERVICE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await baseRepository.createService(payload);
      commit(`admin/service/${serviceTypes.CRAETE_SERVICE}`, data.data[0], {
        root: true,
      });
      commit(serviceTypes.CREATE_SERVICE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(serviceTypes.CREATE_SERVICE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
