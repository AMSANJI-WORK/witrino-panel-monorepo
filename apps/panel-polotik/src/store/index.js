import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: () => ({
    formRefrence: null,
  }),
  getters: {
    formRefrence(state) {
      return state.formRefrence;
    },
  },
  mutations: {
    CHANGE_FORM_REFRENCE(state, payload) {
      state.formRefrence = Object.assign({}, payload);
    },
  },
});
