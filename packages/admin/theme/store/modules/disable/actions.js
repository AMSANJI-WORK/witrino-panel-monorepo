import { themeTypes } from "@packages/admin/theme/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [themeTypes.DISABLE_THEME_ASYNC]({ commit }, { id, updated_id }) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.disableTheme(id, { updated_id });
      commit(`admin/theme/${themeTypes.DISABLE_THEME}`, id, { root: true });
      commit(themeTypes.DISABLE_THEME_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(themeTypes.DISABLE_THEME_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
