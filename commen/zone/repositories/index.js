import userClient from "@witrino/repositories/clients/user";
const source = "Zone";

export default {
  getZone(payload) {
    return userClient.post(`${source}/Get${source}`, payload);
  },
  createZone(payload) {
    return userClient.post(`${source}/Create${source}`, payload);
  },
  updateZone(id, payload) {
    return userClient.put(`${source}/Update${source}/${id}`, payload);
  },
  deleteZone(id) {
    return userClient.delete(`${source}/Delete${source}/${id}`);
  },
  disableZone(id, payload) {
    return userClient.patch(`${source}/IsDelete${source}/${id}`, payload);
  },
};
