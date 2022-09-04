import state from "./root/state";
import mutations from "./root/mutations";
import actions from "./root/actions";
import getters from "./root/getters";
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
