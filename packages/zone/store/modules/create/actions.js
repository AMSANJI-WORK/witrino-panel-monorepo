import { zoneTypes } from "@packages/zone/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const zoneRepository = RepositoryFactory.get("zone");
export default {
  async [zoneTypes.CREATE_ZONE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await zoneRepository.createZone(payload);
      commit(`shared/zone/${zoneTypes.CRAETE_ZONE}`, data.data[0], {
        root: true,
      });
      commit(zoneTypes.CREATE_ZONE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(zoneTypes.CREATE_ZONE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
