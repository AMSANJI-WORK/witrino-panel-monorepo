import DefaultClient from "@polotik/repositories/clients/default";
const Source = "/one-time-login";
export default {
  setPermission(payload) {
    return DefaultClient.post(Source, {
      token: payload,
    });
  },
};
