import getters from "./modules/root/getters";
import state from "./modules/root/states";
import mutations from "./modules/root/mutations";
import actions from "./modules/root/actions";
import modules from "./modules";
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules,
};
