<template>
  <v-form ref="loginRef" @submit.prevent="loginSubmited">
    <v-col cols="12" class="px-1 py-0 mt-3">
      <v-text-field
        class="pt-2"
        outlined
        :loading="formLoading"
        label="شماره همراه"
        placeholder=""
        v-model="loginform.mobile"
        :rules="[rules.required]"
        prepend-inner-icon="mdi-phone"
        background-color="#F2F2F2"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="px-1 py-0">
      <v-text-field
        outlined
        :rules="[rules.required]"
        v-model="loginform.password"
        :type="show ? 'text' : 'password'"
        label="رمز عبور"
        placeholder=""
        :loading="formLoading"
        prepend-inner-icon="mdi-lock"
        :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="showPass()"
        background-color="#F2F2F2"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="px-1 d-flex align-center">
      <v-checkbox
        class="mt-0"
        v-model="loginform.remember"
        required
        hide-details
        dense
        label="مرابه خاطر بسپار"
      >
      </v-checkbox>
      <v-spacer></v-spacer>
      <v-btn link text to="forget-pass" small class="transparent text-caption">
        فراموشی رمزعبور ؟
      </v-btn>
    </v-col>
    <v-col cols="12" class="px-0 d-flex">
      <v-spacer class="d-md-block d-none"></v-spacer>
      <v-col cols="12" md="6" class="px-0">
        <btn-submit> ورود </btn-submit>
      </v-col>
    </v-col>
  </v-form>
</template>

<script>
import fromRules from "@commen/form/mixins/rules";;
import { mapActions } from "vuex";
import { authTypes } from "@applets/auth/src/store/type";
import BtnSubmit from "@applets/auth/src/components/BtnSubmit.vue";
export default {
  components: {
    BtnSubmit,
  },
  mixins: [fromRules],
  data() {
    return {
      show: false,
      loginform: {
        mobile: null,
        password: null,
        remember: false,
      },
    };
  },
  methods: {
    ...mapActions("auth/login", {
      login: authTypes.AUTH_LOGIN_ASYNC,
    }),
    showPass() {
      this.show = !this.show;
    },
    loginSubmited() {
      if (this.$refs.loginRef.validate())
        this.login({
          mobile: this.loginform.mobile,
          password: this.loginform.password,
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
