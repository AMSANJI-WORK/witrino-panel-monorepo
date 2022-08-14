import { roleTypes } from "../../types";

export default {
  [roleTypes.SET_ROLE](state, payload) {
    Object.assign(state.role, payload);
  },
  [roleTypes.SET_ROLES](state, payload) {
    state.roles = [...payload.data];
  },
  [roleTypes.CRATE_ROLE](state, payload) {
    state.roles = [...state.roles, payload];
  },
  [roleTypes.UPDATE_ROLE](state, payload) {
    const targetIndex = state.roles.findIndex((role) => role.id == payload.id);
    Object.assign(state.roles[targetIndex], payload);
  },
  [roleTypes.DELETE_ROLE](state, payload) {
    let targetIndex = state.roles.findIndex((role) => role.id === payload);
    state.roles.splice(targetIndex, 1);
  },
  [roleTypes.DISABLE_ROLE](state, payload) {
    let targetIndex = state.roles.findIndex((role) => role.id === payload);
    state.roles.splice(targetIndex, 1);
  },
};
