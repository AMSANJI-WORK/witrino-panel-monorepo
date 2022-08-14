import modules from "./modules";
import { getters, state, mutations, actions } from "./root";
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules,
};
