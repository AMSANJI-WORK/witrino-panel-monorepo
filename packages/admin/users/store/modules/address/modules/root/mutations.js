import { userAddressTypes } from "../../types";

export default {
  [userAddressTypes.SET_USER_ADDRESS_ADDRESS](state, payload) {
    Object.assign(state.user, payload);
  },
  [userAddressTypes.SET_USER_ADDRESS_ADDRESSS](state, payload) {
    state.users = [...payload.data];
  },
  [userAddressTypes.CRATE_USER_ADDRESS_ADDRESS](state, payload) {
    state.users = [...state.users, payload];
  },
  [userAddressTypes.UPDATE_USER_ADDRESS_ADDRESS](state, payload) {
    const targetIndex = state.users.findIndex((user) => user.id == payload.id);
    Object.assign(state.users[targetIndex], payload);
  },
  [userAddressTypes.DELETE_USER_ADDRESS_ADDRESS](state, payload) {
    let targetIndex = state.users.findIndex((user) => user.id === payload);
    state.users.splice(targetIndex, 1);
  },
  [userAddressTypes.DISABLE_USER_ADDRESS_ADDRESS](state, payload) {
    let targetIndex = state.users.findIndex((user) => user.id === payload);
    state.users.splice(targetIndex, 1);
  },
};
