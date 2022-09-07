import { zoneTypes } from "@commen/zone/store/types";

export default {
  [zoneTypes.SET_ZONE](state, payload) {
    Object.assign(state.zone, payload);
  },
  [zoneTypes.SET_ZONE_LIST](state, payload) {
    state.zoneList = [...payload.data];
  },
  [zoneTypes.CRAETE_ZONE](state, payload) {
    state.zoneList = [...state.zoneList, payload];
  },
  [zoneTypes.UPDATE_ZONE](state, payload) {
    const targetIndex = state.zoneList.findIndex((zone) => zone.id == payload.id);
    Object.assign(state.zoneList[targetIndex], payload);
  },
  [zoneTypes.DELETE_ZONE](state, payload) {
    let targetIndex = state.zoneList.findIndex((zone) => zone.id === payload);
    state.zoneList.splice(targetIndex, 1);
  },
  [zoneTypes.DISABLE_ZONE](state, payload) {
    let targetIndex = state.zoneList.findIndex((zone) => zone.id === payload);
    state.zoneList.splice(targetIndex, 1);
  },
};
