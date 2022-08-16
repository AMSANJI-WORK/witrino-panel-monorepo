import { roleTypes } from "../../types";

export default {
  [roleTypes.SET_ROLE](state, payload) {
    Object.assign(state.role, payload);
  },
  [roleTypes.SET_ROLES](state, payload) {
    state.roleList = [...payload.data];
  },
  [roleTypes.CRAETE_ROLE](state, payload) {
    state.roleList = [...state.roleList, payload];
  },
  [roleTypes.UPDATE_ROLE](state, payload) {
    const targetIndex = state.roleList.findIndex((role) => role.id == payload.id);
    Object.assign(state.roleList[targetIndex], payload);
  },
  [roleTypes.DELETE_ROLE](state, payload) {
    let targetIndex = state.roleList.findIndex((role) => role.id === payload);
    state.roleList.splice(targetIndex, 1);
  },
  [roleTypes.DISABLE_ROLE](state, payload) {
    let targetIndex = state.roleList.findIndex((role) => role.id === payload);
    state.roleList.splice(targetIndex, 1);
  },
};
