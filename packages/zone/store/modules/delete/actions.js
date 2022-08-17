import { zoneTypes } from "@packages/zone/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [zoneTypes.DELETE_ZONE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.deleteZone(payload);
      commit(`${zoneTypes.DELETE_ZONE}`, payload, { root: true });
      commit(zoneTypes.DELETE_ZONE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(zoneTypes.DELETE_ZONE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
