<template>
  <v-form ref="otp" @submit.prevent="otpSubmited">
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="value"
        :loading="formLoading"
        outlined
        :rules="[rules.required]"
        label="کد تایید ارسالی را وارد کنید"
        prepend-inner-icon="mdi-clock"
        background-color="#F2F2F2"
        required
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="py-0 d-lg-flex d-inline-flex text-caption">
      <span>
        <timer ref="otpTimer" @timerEnd="onTimerEnd">
          <template v-slot:default="{ min, sec }">
            {{ sec | twoDigitSec }} : {{ min | ZeroDigit }}
          </template>
        </timer>
      </span>
      <span class="text-caption mr-sm-1">مانده تا دریافت مجدد کد</span>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        class="px-0"
        :disabled="!showResendBtn"
        text
        x-small
        :loading="resendLodingBtn"
        @click="otpRequestSubmited"
        >دریافت مجدد کد</v-btn
      >
    </v-col>
    <v-col cols="12" class="px-0 d-flex">
      <v-spacer class="d-md-block d-none"></v-spacer>
      <v-col cols="12" md="6" class="px-0">
        <btn-submit> تایید </btn-submit>
      </v-col>
    </v-col>
  </v-form>
</template>

<script>
import Timer from "@applets/auth/src/components/Timer.vue";
import { createNamespacedHelpers } from "vuex";
import BtnSubmit from "@applets/auth/src/components/BtnSubmit.vue";
const { mapActions, mapState } = createNamespacedHelpers("auth/otp");

import {
  AUTH_OTP_VALIDATE_ASYNC,
  AUTH_OTP_RESEND_ASYNC,
} from "@applets/auth/src/store/modules/otp/types";
import fromRules from "@commen/form/mixins/rules";;

import Cookies from "js-cookie";

export default {
  components: {
    Timer,
    BtnSubmit,
  },
  mixins: [fromRules],
  data() {
    return {
      showResendBtn: false,
      maxTry: 3,
      value: null,
    };
  },
  computed: {
    ...mapState({
      resendLodingBtn: (state) => state.resendLodingBtn,
    }),
    userPhoneNumber() {
      return this.$route.query.mobile;
    },
  },
  filters: {
    twoDigitSec(value) {
      return value < 10 ? `0${value}` : value;
    },
    ZeroDigit(value) {
      return value == 0 ? `0${value}` : value;
    },
  },
  methods: {
    ...mapActions({
      otpValidate: AUTH_OTP_VALIDATE_ASYNC,
      otpResendCode: AUTH_OTP_RESEND_ASYNC,
    }),
    otpSubmited() {
      if (this.$refs.otp.validate())
        this.otpValidate({
          mobile: this.userPhoneNumber,
          value: this.value,
        }).then(() => Cookies.set("otp", this.value));
    },
    onTimerEnd() {
      if (this.maxTry > 0) this.showResendBtn = !this.showResendBtn;
    },
    otpRequestSubmited() {
      if (this.maxTry > 0) {
        this.maxTry--;
        this.otpResendCode({ mobile: this.userPhoneNumber }).then((res) => {
          this.$refs.otpTimer.resetTimer();
          this.showResendBtn = false;
        });
      }
    },
  },
};
</script>
