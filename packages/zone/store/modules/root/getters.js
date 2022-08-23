const getters = {
  zoneList(state) {
    return state.zoneList.filter((zone) => zone.parent_id);
  },
  zone(state) {
    return state.zone;
  },
};
export default getters;
