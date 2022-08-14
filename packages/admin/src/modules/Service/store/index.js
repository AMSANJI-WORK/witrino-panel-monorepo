// base
import actions from "./modules/root/actions";
import mutations from "./modules/root/mutations";
import getters from "./modules/root/getters";
import state from "./modules/root/states";
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
