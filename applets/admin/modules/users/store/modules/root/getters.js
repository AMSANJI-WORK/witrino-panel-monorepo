import gettersCommen from "@applets/commen/reusable-crud/root/root.getters";
const getters = {
  userRoleId(state) {
    return state.item.roles.map((role) => role.id);
  },
  ...gettersCommen,
};
export default getters;
