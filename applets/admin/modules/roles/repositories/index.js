import UserClient from "@witrino/repositories/clients/user";
import PermissionRepistory from "./permission";

const source = "Role";
export default {
  ...PermissionRepistory,
  getRole(payload) {
    return UserClient.post(`${source}/Get${source}`, payload);
  },
  createRole(payload) {
    return UserClient.post(`${source}/Create${source}`, payload);
  },
  updateRole(id, payload) {
    return UserClient.put(`${source}/Update${source}/${id}`, payload);
  },
  deleteRole(id) {
    return UserClient.delete(`${source}/Delete${source}/${id}`);
  },
  disableRole(id, payload) {
    return UserClient.patch(`${source}/IsDelete${source}/${id}`, payload);
  },
};
