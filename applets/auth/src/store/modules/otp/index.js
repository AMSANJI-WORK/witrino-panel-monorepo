import Vue from "vue";
import router from "@witrino/router";
import { authTypes } from "@applets/auth/src/store/type";
const authRepository = RepositoryFactory.get("auth");
import RepositoryFactory from "@witrino/repositories/factory";

export default {
  namespaced: true,
  state: () => ({
    resendLodingBtn: false,
  }),
  actions: {
    async [authTypes.AUTH_OTP_VALIDATE_ASYNC]({ commit }, payload) {
      try {
        commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
        const data = await authRepository.otp(payload);
        commit(authTypes.AUTH_OTP_VALIDATE_SUCCESS, data);
      } catch (error) {
        commit(authTypes.AUTH_OTP_VALIDATE_FAILURE, error);
      } finally {
        commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      }
    },
    async [authTypes.AUTH_OTP_RESEND_ASYNC]({ commit, state }, payload) {
      try {
        state.resendLodingBtn = true;
        const { data } = await authRepository.otpResend(payload);
        commit(authTypes.AUTH_OTP_RESEND_SUCCESS, data);
      } catch (error) {
        commit(authTypes.AUTH_OTP_RESEND_FAILURE, error);
      } finally {
        state.resendLodingBtn = false;
      }
    },
  },
  mutations: {
    [authTypes.AUTH_OTP_VALIDATE_FAILURE](_, payload) {
      console.log(payload);
      Vue.$toast.error("ثبت نام شما با خطا مواجه شد");
    },
    [authTypes.AUTH_OTP_VALIDATE_SUCCESS](_, payload) {
      const { mobile } = router.currentRoute.query;
      router.push({
        path: "set-pass",
        query: { mobile },
      });
    },
    [authTypes.AUTH_OTP_RESEND_SUCCESS](_, payload) {},
    [authTypes.AUTH_OTP_RESEND_FAILURE](_, payload) {
      Vue.$toast.error("دریافت مجدد کد با خطا مواجه شد");
    },
  },
};
