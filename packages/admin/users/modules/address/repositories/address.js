import userClient from "@witrino/repositories/clients/user";
const source = "UserAddress";
export default {
  getUserAddress(payload) {
    return userClient.post(`${source}/Get${source}`, payload);
  },
  createUserAddress(payload) {
    return userClient.post(`${source}/Create${source}`, payload);
  },
  updateUserAddress(id, payload) {
    return userClient.put(`${source}/Update${source}/${id}`, payload);
  },
  deleteUserAddress(id) {
    return userClient.delete(`${source}/Delete${source}/${id}`);
  },
  disableUserAddress(id, payload) {
    return userClient.patch(`${source}/IsDelete${source}/${id}`, payload);
  },
};
