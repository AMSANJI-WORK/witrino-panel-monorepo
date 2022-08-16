import { userTypes } from "@packages/admin/users/store/types";

export default {
  [userTypes.SET_USER_ADDRESS](state, payload) {
    Object.assign(state.userAddress, payload);
  },
  [userTypes.SET_USER_ADDRESSS](state, payload) {
    state.userAddressList = [...payload.data];
  },
  [userTypes.CRAETE_USER_ADDRESS](state, payload) {
    state.userAddressList = [...state.userAddressList, payload];
  },
  [userTypes.UPDATE_USER_ADDRESS](state, payload) {
    const targetIndex = state.userAddressList.findIndex(
      (userAddress) => userAddress.id == payload.id
    );
    Object.assign(state.userAddressList[targetIndex], payload);
  },
  [userTypes.DELETE_USER_ADDRESS](state, payload) {
    let targetIndex = state.userAddressList.findIndex(
      (userAddress) => userAddress.id === payload
    );
    state.userAddressList.splice(targetIndex, 1);
  },
  [userTypes.DISABLE_USER_ADDRESS](state, payload) {
    let targetIndex = state.userAddressList.findIndex(
      (userAddress) => userAddress.id === payload
    );
    state.userAddressList.splice(targetIndex, 1);
  },
};
