import { serviceTypes } from "@packages/admin/service/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [serviceTypes.DISABLE_SERVICE_ASYNC]({ commit }, { id, updated_id }) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await baseRepository.disableService(id, { updated_id });
      commit(`admin/service/${serviceTypes.DISABLE_SERVICE}`, id, { root: true });
      commit(serviceTypes.DISABLE_SERVICE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(serviceTypes.DISABLE_SERVICE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
