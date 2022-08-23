import Vue from "vue";
import Vuex from "vuex";
import storeModules from "./modules/store.module";
import { getters, state, mutations, actions } from "./root";
Vue.use(Vuex);
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    ...storeModules,
  },
});
