import UserClient from "@polotik/repositories/clients/user";
;
const Source = "/guilds/barter";
export default {
  getAllBarters({ pagination, userId }) {
    const { size, page } = pagination;
    if (userId)
      return UserClient.get(
        `${Source}?user_id=${userId}&size=${size}&page=${page}`
      );
    return UserClient.get(`${Source}?size=${size}&page=${page}`);
  },
  getABarter(id) {
    return UserClient.get(`${Source}/${id}`);
  },
  createBarter(payload) {
    return UserClient.post(`${Source}`, payload);
  },
  updateBarter(id, payload) {
    return UserClient.put(`${Source}/${id}`, payload);
  },
  deleteBarter(id) {
    return UserClient.delete(`${Source}/${id}`);
  },
};
