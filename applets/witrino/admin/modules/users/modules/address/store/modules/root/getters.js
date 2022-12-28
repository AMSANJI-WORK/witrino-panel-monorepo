import gettersCommen from "@applets/commen/reusable-crud/root/root.getters";

const getters = {
  ...gettersCommen,
  editedId(state) {
    return state.editedId;
  },
};
export default getters;
