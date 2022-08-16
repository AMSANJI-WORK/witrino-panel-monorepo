import { userAddressTypes } from "../../types";

export default {
  [userAddressTypes.SET_USER_ADDRESS_ADDRESS](state, payload) {
    Object.assign(state.userAddress, payload);
  },
  [userAddressTypes.SET_USER_ADDRESS_ADDRESSS](state, payload) {
    state.userAddressList = [...payload.data];
  },
  [userAddressTypes.CRATE_USER_ADDRESS_ADDRESS](state, payload) {
    state.userAddressList = [...state.userAddressList, payload];
  },
  [userAddressTypes.UPDATE_USER_ADDRESS_ADDRESS](state, payload) {
    const targetIndex = state.userAddressList.findIndex((userAddress) => userAddress.id == payload.id);
    Object.assign(state.userAddressList[targetIndex], payload);
  },
  [userAddressTypes.DELETE_USER_ADDRESS_ADDRESS](state, payload) {
    let targetIndex = state.userAddressList.findIndex((userAddress) => userAddress.id === payload);
    state.userAddressList.splice(targetIndex, 1);
  },
  [userAddressTypes.DISABLE_USER_ADDRESS_ADDRESS](state, payload) {
    let targetIndex = state.userAddressList.findIndex((userAddress) => userAddress.id === payload);
    state.userAddressList.splice(targetIndex, 1);
  },
};
