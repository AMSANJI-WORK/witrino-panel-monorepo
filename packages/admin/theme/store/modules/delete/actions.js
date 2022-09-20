import { themeTypes } from "@packages/admin/theme/store/types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [themeTypes.DELETE_THEME_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await baseRepository.deleteTheme(payload);
      commit(`admin/theme/${themeTypes.DELETE_THEME}`, payload, { root: true });
      commit(themeTypes.DELETE_THEME_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(themeTypes.DELETE_THEME_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
};
