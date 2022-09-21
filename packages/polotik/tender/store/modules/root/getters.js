import gettersCommen from "@commen/request/store/root/root.getters";

const getters = {
  ...gettersCommen,
  step(state) {
    return state.step;
  },
};
export default getters;
