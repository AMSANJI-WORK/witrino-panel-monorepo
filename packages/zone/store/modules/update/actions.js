import router from "@witrino/router";
import { zoneTypes } from "@packages/zone/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [zoneTypes.UPDATE_ZONE_ASYNC]({ commit }, payload) {
    try {
      let id;
      delete payload.password;
      if (router.currentRoute.path.includes("profile"))
        id = router.currentRoute.params?.zoneId;
      else id = router.currentRoute.params?.id;
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.updateZone(id, payload);
      commit(`${zoneTypes.UPDATE_ZONE}`, data.data[0], {
        root: true,
      });
      commit(zoneTypes.UPDATE_ZONE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(zoneTypes.UPDATE_ZONE_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
