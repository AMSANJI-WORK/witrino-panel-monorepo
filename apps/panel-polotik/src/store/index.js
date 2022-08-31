import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import { getters, state, mutations, actions } from "./root";
Vue.use(Vuex);
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
});
