import { serviceTypes } from "@packages/admin/service/store/types";

export default {
  [serviceTypes.SET_SERVICE](state, payload) {
    Object.assign(state.service, payload);
  },
  [serviceTypes.SET_SERVICE_LIST](state, payload) {
    state.serviceList = [...payload.data];
  },
  [serviceTypes.CRAETE_SERVICE](state, payload) {
    state.serviceList = [...state.serviceList, payload];
  },
  [serviceTypes.UPDATE_SERVICE](state, payload) {
    const targetIndex = state.serviceList.findIndex((service) => service.id == payload.id);
    Object.assign(state.serviceList[targetIndex], payload);
  },
  [serviceTypes.DELETE_SERVICE](state, payload) {
    let targetIndex = state.serviceList.findIndex((service) => service.id === payload);
    state.serviceList.splice(targetIndex, 1);
  },
  [serviceTypes.DISABLE_SERVICE](state, payload) {
    let targetIndex = state.serviceList.findIndex((service) => service.id === payload);
    state.serviceList.splice(targetIndex, 1);
  },
};
