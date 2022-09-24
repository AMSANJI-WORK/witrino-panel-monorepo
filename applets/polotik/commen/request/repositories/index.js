import UserClient from "@polotik/repositories/clients/user";
const source = "/guilds";
export default {
  getAllRequest({
    service,
    userId = null,
    offerUserId = null,
    pagination: { page, size },
  }) {
    let url = `${source}/${service}`;
    let pagination = `size=${size}&page=${page}`;
    if (userId) url = `${url}?user_id=${userId}&${pagination}`;
    if (offerUserId) url = `${url}?offer_user_id=${offerUserId}&${pagination}`;
    if (!offerUserId && !userId) url += `?${pagination}`;
    return UserClient.get(url);
  },
  getOneRequest(id, service) {
    return UserClient.get(`${source}/${service}/${id}`);
  },
  createRequset(payload, service) {
    return UserClient.post(`${source}/${service}`, payload);
  },
  updateRequset(id, service, payload) {
    return UserClient.put(`${source}/${service}/${id}`, payload);
  },
  deleteRequset(id, service) {
    return UserClient.delete(`${source}/${service}/${id}`);
  },
};
