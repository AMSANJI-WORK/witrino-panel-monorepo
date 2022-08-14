import UserClient from "@witrino/repositories/clients/user";
const source = "Permission";
export default {
  getPermission(payload) {
    return UserClient.post(`${source}/Get${source}`, payload);
  },
  createPermission(payload) {
    return UserClient.post(`${source}/Create${source}`, payload);
  },
  updatePermission(id, payload) {
    return UserClient.put(`${source}/Update${source}/${id}`, payload);
  },
  deletePermission(id) {
    return UserClient.delete(`${source}/Delete${source}/${id}`);
  },
  disablePermission(id, payload) {
    return UserClient.patch(`${source}/IsDelete${source}/${id}`, payload);
  },
  disablePermission(id, payload) {
    return UserClient.patch(`${source}/IsDelete${source}/${id}`, payload);
  },
};
