import UserClient from "@polotik/repositories/clients/user";
const Source = "/guilds/barter";
export default {
  getAllBarters({ pagination, userId = null, offerUserId = null }) {
    const { size, page } = pagination;
    if (userId)
      return UserClient.get(
        `${Source}?user_id=${userId}&size=${size}&page=${page}`
      );
    else if (offerUserId)
      return UserClient.get(
        `${Source}?offer_user_id=${offerUserId}&size=${size}&page=${page}`
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
