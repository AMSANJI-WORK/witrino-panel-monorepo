const getters = {
  planList(state) {
    return state.planList;
  },
  plan(state) {
    return state.plan;
  },
  planDetails(state) {
    return state.plan.details;
  },
};
export default getters;
