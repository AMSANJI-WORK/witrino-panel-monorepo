import UserClient from "@polotik/repositories/clients/user";
;
const Source = "/guilds/tender";
export default {
  getAllTenders({ pagination, userId }) {
    const { size, page } = pagination;
    if (userId)
      return UserClient.get(
        `${Source}?user_id=${userId}&size=${size}&page=${page}`
      );
    return UserClient.get(`${Source}?size=${size}&page=${page}`);
  },
  getATender(id) {
    return UserClient.get(`${Source}/${id}`);
  },
  createTender(payload) {
    return UserClient.post(`${Source}`, payload);
  },
  updateTender(id, payload) {
    return UserClient.put(`${Source}/${id}`, payload);
  },
  deleteTender(id) {
    return UserClient.delete(`${Source}/${id}`);
  },
};
