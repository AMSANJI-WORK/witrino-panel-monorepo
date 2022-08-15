import Vue from "vue";
import router from "@witrino/router";
import { authTypes } from "@auth/store/type";
import RepositoryFactory from "@witrino/repositories/factory";
const authRepository = RepositoryFactory.get("auth");

export default {
  namespaced: true,
  state: () => ({
    user: {
      id: null,
      is_deleted: null,
      created_at: null,
      updated_at: null,
      created_id: null,
      updated_id: null,
      ip: null,
      is_viewed: null,
      is_active: null,
      full_name: null,
      jensiat: null,
      national_no: null,
      father_name: null,
      mobile: null,
      email: null,
      password: null,
      image_avatar: null,
      phone: null,
      money_deposit: null,
      otp: null,
    },
  }),
  getters: {
    user: (state) => state.user,
  },
  actions: {
    async [authTypes.AUTH_REGISTER_ASYNC]({ commit }, payload) {
      try {
        commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
        const { data } = await authRepository.register(payload);
        commit(authTypes.AUTH_REGISTER_SUCCESS, data);
        Vue.$toast.info(data.message);
      } catch (error) {
        console.log(error);
        commit(authTypes.AUTH_REGISTER_FAILURE, error);
      } finally {
        commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      }
    },
  },
  mutations: {
    [authTypes.AUTH_REGISTER_SUCCESS](state, payload) {
      const { data } = payload;
      state.user = Object.assign({}, data);
      router.push({ path: "otp", query: { mobile: state.user.mobile } });
    },
    [authTypes.AUTH_REGISTER_FAILURE](state) {},
  },
};
