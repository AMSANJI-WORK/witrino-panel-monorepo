<template>
  <v-form ref="setPass" @submit.prevent="setPassWord">
    <v-col cols="12" class="py-0">
      <v-text-field
        outlined
        :rules="[rules.required, minRule]"
        v-model="setPassFrom.password"
        :type="show.pass ? 'text' : 'password'"
        label="رمز عبور"
        :loading="formLoading"
        prepend-inner-icon="mdi-lock"
        :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="showPass"
        background-color="#F2F2F2"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="py-0">
      <v-text-field
        outlined
        :rules="[rules.required, minRule, validateConfirmPass]"
        v-model="confirmPass"
        :type="show.confirmPass ? 'text' : 'password'"
        label="تکرار رمز عبور"
        :loading="formLoading"
        prepend-inner-icon="mdi-lock"
        :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="showConfirmPass"
        background-color="#F2F2F2"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="px-0 d-flex">
      <v-spacer class="d-md-block d-none"></v-spacer>
      <v-col cols="12" md="6" class="px-0">
        <btn-submit> دریافت </btn-submit>
      </v-col>
    </v-col>
  </v-form>
</template>

<script>
import Cookies from "js-cookie";
import { mapActions } from "vuex";
import fromRules from "@applets/commen/form/mixins/rules";
import BtnSubmit from "@applets/witrino/auth/src/components/BtnSubmit.vue";
import { authTypes } from "@applets/witrino/auth/src/store/type";
import loadingFormAuth from "../../mixins/loading";

export default {
  components: {
    BtnSubmit,
  },
  mixins: [fromRules, loadingFormAuth],
  data: () => ({
    confirmPass: "",
    show: { pass: false, confirmPass: false },
    minRule: (v) =>
      v.length >= 8 || "پسورد و تکرار پسورد باید بیشتر از هشت کاراکتر باشد",
    setPassFrom: {
      mobile: null,
      value: null,
      password: "",
    },
  }),
  computed: {
    validateConfirmPass() {
      return this.setPassFrom.password == this.confirmPass
        ? true
        : "تکرار پسورد صحیح نیست";
    },
  },
  methods: {
    ...mapActions("auth/setpass", {
      setPassWordAsync: authTypes.AUTH_SET_PASS_ASYNC,
    }),
    setPassWord() {
      this.setPassFrom.mobile = this.$route.query.mobile;
      this.setPassFrom.value = Cookies.get("otp") ?? null;
      if (this.$refs.setPass.validate())
        this.setPassWordAsync(this.setPassFrom);
    },
    showPass() {
      this.show.pass = !this.show.pass;
    },
    showConfirmPass() {
      this.show.confirmPass = !this.show.confirmPass;
    },
  },
};
</script>

<style lang="scss" scoped></style>
