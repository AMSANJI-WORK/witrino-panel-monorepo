// base
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import state from "./states";
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
