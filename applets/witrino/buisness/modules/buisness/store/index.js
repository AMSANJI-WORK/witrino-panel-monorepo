import { getters, mutations, state, actions } from "./modules/root";
import modules from "./modules";
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules,
};
