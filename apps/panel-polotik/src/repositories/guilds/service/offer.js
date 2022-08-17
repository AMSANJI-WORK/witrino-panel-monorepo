import UserClient from "@polotik/repositories/clients/user";
const Source = "/guilds";
const POINT = "offers";
export default {
  getAllOffers(TARGET, ID, { page, size }) {
    return UserClient.get(
      `${Source}/${TARGET}/${ID}/${POINT}?size=${size}&page=${page}`
    );
  },
  getAnOffer(TARGET, id) {
    return UserClient.get(`${Source}/${TARGET}/${POINT}/${id}`);
  },
  createOffer(payload) {
    const { target, participateForm } = payload;
    return UserClient.post(
      `${Source}/${target.name}/${target.id}/${POINT}`,
      participateForm
    );
  },
  updateOffer(TARGET, payload, id) {
    return UserClient.put(`${Source}/${TARGET}/${POINT}/${id}`, payload);
  },
  deleteOffer(TARGET, id) {
    return UserClient.delete(`${Source}/${TARGET}/${POINT}/${id}`);
  },
};
