import gettersCommen from "@commen/reusable-crud/root/root.getters";

const getters = {
  ...gettersCommen,
  planDetails(state) {
    return state.plan.details;
  },
};
export default getters;
