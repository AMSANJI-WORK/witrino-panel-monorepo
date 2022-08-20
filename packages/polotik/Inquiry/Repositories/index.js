import UserClient from "@polotik/repositories/clients/user";
;
const Source = "/guilds/inquiry";
export default {
  getAllInquiries({ pagination, userId }) {
    const { size, page } = pagination;
    if (userId)
      return UserClient.get(
        `${Source}?user_id=${userId}&size=${size}&page=${page}`
      );
    return UserClient.get(`${Source}?size=${size}&page=${page}`);
  },
  getAnInquiry(id) {
    return UserClient.get(`${Source}/${id}`);
  },
  createInquiry(payload) {
    return UserClient.post(`${Source}`, payload);
  },
  updateInquiry(id, payload) {
    return UserClient.put(`${Source}/${id}`, { ...payload });
  },
  deleteInquiry(id) {
    return UserClient.delete(`${Source}/${id}`);
  },
};