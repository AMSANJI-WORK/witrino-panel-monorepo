const source = "Plan";
import UserClient from "@witrino/repositories/clients/user";
export default {
  getPlan(payload) {
    return UserClient.post(`${source}/Get${source}`, payload);
  },
  createPlan(payload) {
    return UserClient.post(`${source}/Create${source}`, payload);
  },
  updatePlan(id, payload) {
    return UserClient.put(`${source}/Update${source}/${id}`, payload);
  },
  deletePlan(id) {
    return UserClient.delete(`${source}/Delete${source}/${id}`);
  },
  disablePlan(id, payload) {
    return UserClient.patch(`${source}/IsDelete${source}/${id}`, payload);
  },
};
