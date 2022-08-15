import userClient from "@witrino/repositories/clients/user";
const source = "User";
export default {
  getUser(payload) {
    return userClient.post(`${source}/Get${source}`, payload);
  },
  createUser(payload) {
    return userClient.post(`${source}/Create${source}`, payload);
  },
  updateUser(id, payload) {
    return userClient.put(`${source}/Update${source}/${id}`, payload);
  },
  deleteUser(id) {
    return userClient.delete(`${source}/Delete${source}/${id}`);
  },
  disableUser(id, payload) {
    return userClient.patch(`${source}/IsDelete${source}/${id}`, payload);
  },
};
