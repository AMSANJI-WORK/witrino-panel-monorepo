import mockClient from "@witrino/repositories/clients/mock";
const Source = "/User";
export default {
  // all get convert to post
  getOneUser(id) {
    return mockClient.get(`${Source}/GetUser.json`);
  },
  udpateUser(id, payload) {
    console.log(id);
    console.log(payload);
    // return mockClient.put(`${Source}/UpdateUser/${id}`, payload);
    return mockClient.get(`${Source}/UpdateUser.json`, payload);
  },
};
