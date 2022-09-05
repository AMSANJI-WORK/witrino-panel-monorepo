import Vue from "vue";
import Cookies from "js-cookie";
import {
  SET_PERMISSION_ASYNC,
  SET_PERMISSION_FAILURE,
  SET_PERMISSION_SUCCESS,
} from "./types";
import UserClient from "@polotik/repositories/clients/user";
import RepositoryFactory from "@polotik/repositories/factory";
const authRepository = RepositoryFactory.get("auth");
import boxTopData from "../../home/mock/boxTop";

export default {
  namespaced: true,
  state: () => ({
    indeterminateLoading: false,
    token: null,
    role: null,
    cards: [],
    user: {
      id: null,
      name: null,
      registerDate: null,
      numOfProducts: null,
      companyName: null,
      image: null,
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
      Cookies.remove("user-name");
      Cookies.remove("register-date");
      Cookies.remove("num-of-products");
      Cookies.remove("image");
      Cookies.remove("mobile");
      Cookies.remove("company-name");
      Cookies.remove("site");
      Cookies.remove("cards");
    },
    SET_DASHBOARD(state, payload) {
      state.cards = [...payload];
      state.cards = state.cards.map((card, index) => {
        return { ...card, icon: boxTopData[index].icon };
      });
    },
    [SET_PERMISSION_SUCCESS](state, { token, user, cards }) {
      Cookies.set("cards", JSON.stringify(state.cards));
      const {
        id,
        role,
        name,
        image,
        mobile,
        num_of_products,
        register_date,
        company_name,
        site,
      } = user;
      //
      Cookies.set("token", token);
      Cookies.set("role", role);
      Cookies.set("user-id", id);
      Cookies.set("user-name", name);
      Cookies.set("register-date", register_date);
      Cookies.set("num-of-products", num_of_products);
      Cookies.set("image", image);
      Cookies.set("mobile", mobile);
      Cookies.set("company-name", company_name);
      Cookies.set("site", site);
      //
      state.token = token;
      state.role = role;
      state.user.id = id;
      state.user.name = name;
      state.user.site = site;
      state.user.registerDate = register_date;
      state.user.numOfProducts = num_of_products;
      state.user.image = image;
      state.user.mobile = mobile;
      state.user.companyName = company_name;
      //
      UserClient.defaults.headers.Authorization = `Bearer ${Cookies.get(
        "token"
      )}`;
      Vue.$toast.success("احراز هویت کاربر با موفقیت انجام شد");
    },
    [SET_PERMISSION_FAILURE](_, payload) {
      Vue.$toast.error("احراز هویت کاربر با خطا مواجه شد");
      console.log(payload);
    },
  },
  actions: {
    async GET_DASHBOARD_DATA({ commit }) {
      try {
        const { data } = await authRepository.getDashboardData();
        commit("SET_DASHBOARD", data.cards);
      } catch (error) {
        console.log(error);
      }
    },
    async [SET_PERMISSION_ASYNC]({ commit, state }, payload) {
      try {
        state.indeterminateLoading = true;
        const { cards } = await authRepository.setPermission(payload);
        commit(SET_PERMISSION_SUCCESS, cards);
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
