import { getters, mutations, state } from "./modules/root";
import modules from "./modules";
// tips --> address module imported in user sub modules
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  modules,
};
