import { planTypes } from "@packages/admin/plan/store/types";
export default {
  namespaced: true,
  state: () => ({
    schema: [],
  }),
  getters: {
    schema: (state) => state.schema,
  },
  mutations: {
    [planTypes.SET_FORM_SCHEMA](state, payload) {
      state.schema = [...payload];
    },
  },
};
