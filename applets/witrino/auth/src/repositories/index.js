import defaultClient from "@witrino/repositories/clients/default";

export default {
  login(payload) {
    return defaultClient.post("login", payload);
  },
  register(payload) {
    return defaultClient.post("register", payload);
  },
  refreshToken(payload) {
    return defaultClient.post("refresh", payload);
  },
  otp(payload) {
    return defaultClient.post("Otp/Otp-validate", payload);
  },
  otpResend(payload) {
    return defaultClient.post("Otp/Otp-resend", payload);
  },
  setPassword(payload) {
    return defaultClient.post("setPassword", payload);
  },
  forgetPassword(payload) {
    return defaultClient.post("forgotPassword", payload);
  },
};
