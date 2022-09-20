import UserClient from "@witrino/repositories/clients/user";
export default {
  get(source, payload) {
    return UserClient.post(`${source}/Get${source}`, payload);
  },
  create(source, payload) {
    return UserClient.post(`${source}/Create${source}`, payload);
  },
  update(source, id, payload) {
    return UserClient.put(`${source}/Update${source}/${id}`, payload);
  },
  delete(source, id) {
    return UserClient.delete(`${source}/Delete${source}/${id}`);
  },
  disable(source, id, payload) {
    return UserClient.patch(`${source}/IsDelete${source}/${id}`, payload);
  },
};
