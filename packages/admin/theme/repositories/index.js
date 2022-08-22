import UserClient from "@witrino/repositories/clients/user";

const source = "Theme";
export default {
  getTheme(payload) {
    return UserClient.post(`${source}/Get${source}`, payload);
  },
  createTheme(payload) {
    return UserClient.post(`${source}/Create${source}`, payload);
  },
  updateTheme(id, payload) {
    return UserClient.put(`${source}/Update${source}/${id}`, payload);
  },
  deleteTheme(id) {
    return UserClient.delete(`${source}/Delete${source}/${id}`);
  },
  disableTheme(id, payload) {
    return UserClient.patch(`${source}/IsDelete${source}/${id}`, payload);
  },
};
