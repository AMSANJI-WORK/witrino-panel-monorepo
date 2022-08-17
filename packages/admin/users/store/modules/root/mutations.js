import { userTypes } from "@packages/admin/users/store/types";

export default {
  [userTypes.SET_USER](state, payload) {
    Object.assign(state.user, payload);
  },
  [userTypes.SET_USERS](state, payload) {
    state.userList = [...payload.data];
  },
  [userTypes.CRAETE_USER](state, payload) {
    state.userList = [...state.userList, payload];
  },
  [userTypes.UPDATE_USER](state, payload) {
    const targetIndex = state.userList.findIndex((user) => user.id == payload.id);
    Object.assign(state.userList[targetIndex], payload);
  },
  [userTypes.DELETE_USER](state, payload) {
    let targetIndex = state.userList.findIndex((user) => user.id === payload);
    state.userList.splice(targetIndex, 1);
  },
  [userTypes.DISABLE_USER](state, payload) {
    let targetIndex = state.userList.findIndex((user) => user.id === payload);
    state.userList.splice(targetIndex, 1);
  },
};
