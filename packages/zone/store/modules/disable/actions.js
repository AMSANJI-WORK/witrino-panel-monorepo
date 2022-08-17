import { zoneTypes } from "@packages/zone/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [zoneTypes.DISABLE_ZONE_ASYNC]({ commit }, { id, updated_id }) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.disableZone(id, { updated_id });
      commit(`${zoneTypes.DISABLE_ZONE}`, id, { root: true });
      commit(zoneTypes.DISABLE_ZONE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(zoneTypes.DISABLE_ZONE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
