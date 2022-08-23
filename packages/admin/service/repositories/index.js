import UserClient from "@witrino/repositories/clients/user";

const source = "Service";
export default {
  getService(payload) {
    return UserClient.post(`${source}/Get${source}`, payload);
  },
  createService(payload) {
    return UserClient.post(`${source}/Create${source}`, payload);
  },
  updateService(id, payload) {
    return UserClient.put(`${source}/Update${source}/${id}`, payload);
  },
  deleteService(id) {
    return UserClient.delete(`${source}/Delete${source}/${id}`);
  },
  disableService(id, payload) {
    return UserClient.patch(`${source}/IsDelete${source}/${id}`, payload);
  },
};
