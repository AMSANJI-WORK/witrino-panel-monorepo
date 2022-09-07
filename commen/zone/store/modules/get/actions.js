import { zoneTypes } from "@commen/zone/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const zoneRepository = RepositoryFactory.get("zone");

export default {
  async [zoneTypes.GET_ALL_ZONE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await zoneRepository.getZone(payload);
      commit(`shared/zone/${zoneTypes.SET_ZONE_LIST}`, data.data, {
        root: true,
      });
      commit(zoneTypes.GET_ALL_ZONE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(zoneTypes.GET_ALL_ZONE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
  async [zoneTypes.GET_ONE_ZONE_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await zoneRepository.getZone(payload);
      commit(`shared/zone/${zoneTypes.SET_ZONE}`, data.data[0], {
        root: true,
      });
      commit(zoneTypes.GET_ONE_ZONE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(zoneTypes.GET_ONE_ZONE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
