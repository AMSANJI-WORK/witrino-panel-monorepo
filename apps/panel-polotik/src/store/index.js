import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
Vue.use(Vuex);
export default new Vuex.Store({
  state: () => ({
    formRefrence: null,
    serviceName: "",
  }),
  getters: {
    serviceName(state) {
      return state.serviceName;
    },
    formRefrence(state) {
      return state.formRefrence;
    },
  },
  mutations: {
    CHANGE_SERVICE(state, payload) {
      state.serviceName = payload;
    },
    CHANGE_FORM_REFRENCE(state, payload) {
      state.formRefrence = Object.assign({}, payload);
    },
  },
  modules,
});
