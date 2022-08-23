import Cookies from "js-cookie";
import modules from "./modules";
import { authTypes } from "./type";
import defaultClient from "@witrino/repositories/clients/default";
import userClient from "@witrino/repositories/clients/user";

export default {
  namespaced: true,
  modules,
  state: () => ({
    access_token: null,
    refresh_token: null,
    id: null,
  }),
  getters: {
    access_token: (state) => state.access_token,
    refresh_token: (state) => state.refresh_token,
    currentUserId: (state) => state.currentUserId,
  },
  mutations: {
    [authTypes.SET_AUTHORIZE_DATA](state, payload) {
      const {
        data: { access_token, id, refresh_token },
        message,
      } = payload;

      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.id = id;
      defaultClient.defaults.headers.Authorization = `Bearer ${state.access_token}`;
      userClient.defaults.headers.Authorization = `Bearer ${state.access_token}`;
      Cookies.set("access_token", access_token);
      Cookies.set("refresh_token", refresh_token);
      Cookies.set("userId", JSON.stringify(id));
    },
    [authTypes.REMOVE_AUTHORIZE_DATA](state) {
      state.access_token = null;
      state.refresh_token = null;
      state.id = null;
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      Cookies.remove("userId");
    },
  },
};
