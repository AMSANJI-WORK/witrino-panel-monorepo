import { themeTypes } from "@packages/admin/theme/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");
export default {
  async [themeTypes.CREATE_THEME_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await baseRepository.createTheme(payload);
      commit(`admin/theme/${themeTypes.CRAETE_THEME}`, data.data[0], {
        root: true,
      });
      commit(themeTypes.CREATE_THEME_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(themeTypes.CREATE_THEME_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
