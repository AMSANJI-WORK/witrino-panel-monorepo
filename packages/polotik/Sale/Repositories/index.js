import UserClient from "@polotik/repositories/clients/user";
;
const Source = "/guilds/sales";
export default {
  getAllSales({ pagination, userId }) {
    const { size, page } = pagination;
    if (userId)
      return UserClient.get(
        `${Source}?user_id=${userId}&size=${size}&page=${page}`
      );
    return UserClient.get(`${Source}?size=${size}&page=${page}`);
  },
  getASale(id) {
    return UserClient.get(`${Source}/${id}`);
  },
  createSale(payload) {
    return UserClient.post(`${Source}`, payload);
  },
  updateSale(id, payload) {
    return UserClient.put(`${Source}/${id}`, payload);
  },
  deleteSale(id) {
    return UserClient.delete(`${Source}/${id}`);
  },
};
