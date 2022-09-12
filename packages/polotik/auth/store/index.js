import Vue from "vue";
import Cookies from "js-cookie";
import {
  SET_PERMISSION_ASYNC,
  SET_PERMISSION_FAILURE,
  SET_PERMISSION_SUCCESS,
  SET_UESR,
} from "./types";
import UserClient from "@polotik/repositories/clients/user";
import RepositoryFactory from "@polotik/repositories/factory";
const authRepository = RepositoryFactory.get("auth");

export default {
  namespaced: true,
  state: () => ({
    cookieConfig: {},
    indeterminateLoading: false,
    token: null,
    user: {
      id: null,
      name: null,
      register_date: null,
      num_of_products: null,
      company_name: null,
      image: null,
      role: null,
      mobile: null,
      site: null,
    },
  }),
  getters: {
    user: (state) => state.user,
    token: (state) => state.token || null,
    cards: (state) => state.cards,
  },
  mutations: {
    LOGOUT() {
      Cookies.remove("token");
      Cookies.remove("role");
      Cookies.remove("user-id");
      localStorage.removeItem("currentUser");
    },
    [SET_PERMISSION_SUCCESS](state, { token }) {
      state.token = token;
      Cookies.set("token", token, state.cookieConfig);
      UserClient.defaults.headers.Authorization = `Bearer ${state.token}`;
      Vue.$toast.success("احراز هویت کاربر با موفقیت انجام شد");
    },
    [SET_PERMISSION_FAILURE](_, payload) {
      Vue.$toast.error("احراز هویت کاربر با خطا مواجه شد");
      console.log(payload);
    },
    [SET_UESR](state, { user }) {
      Object.assign(state.user, user);
      Cookies.set("role", state.user.role, state.cookieConfig);
      Cookies.set("user-id", state.user.id, state.cookieConfig);
      let currentUser = Object.assign({}, user);
      delete currentUser.role;
      delete currentUser.id;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    },
    [SET_PERMISSION_FAILURE](_, payload) {
      Vue.$toast.error("احراز هویت کاربر با خطا مواجه شد");
      console.log(payload);
    },
  },
  actions: {
    async [SET_PERMISSION_ASYNC]({ commit, state }, payload) {
      try {
        state.indeterminateLoading = true;
        const { data } = await authRepository.setPermission(payload);
        commit(SET_PERMISSION_SUCCESS, data);
        commit(SET_UESR, data);
      } catch (error) {
        commit(SET_PERMISSION_FAILURE, error);
      } finally {
        setTimeout(() => {
          state.indeterminateLoading = false;
        }, 1000);
      }
    },
  },
};
