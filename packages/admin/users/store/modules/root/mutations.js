import { userTypes } from "../../types";

export default {
  [userTypes.SET_USER](state, payload) {
    Object.assign(state.user, payload);
  },
  [userTypes.SET_USERS](state, payload) {
    state.users = [...payload.data];
  },
  [userTypes.CRATE_USER](state, payload) {
    state.users = [...state.users, payload];
  },
  [userTypes.UPDATE_USER](state, payload) {
    const targetIndex = state.users.findIndex((user) => user.id == payload.id);
    Object.assign(state.users[targetIndex], payload);
  },
  [userTypes.DELETE_USER](state, payload) {
    let targetIndex = state.users.findIndex((user) => user.id === payload);
    state.users.splice(targetIndex, 1);
  },
  [userTypes.DISABLE_USER](state, payload) {
    let targetIndex = state.users.findIndex((user) => user.id === payload);
    state.users.splice(targetIndex, 1);
  },
};
