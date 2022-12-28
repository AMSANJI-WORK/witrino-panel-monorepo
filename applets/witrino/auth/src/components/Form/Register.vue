<template>
  <v-form ref="registerRef" @submit.prevent="registerSubmited" lazy-validation>
    <v-col cols="12" class="px-1 pb-0 mt-3">
      <v-text-field
        class="pt-2"
        name="mobile"
        outlined
        v-model="registerform.mobile"
        :rules="[rules.required]"
        label="شماره همراه"
        :loading="formLoading"
        prepend-inner-icon="mdi-phone"
        background-color="#F2F2F2"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="px-1 py-0">
      <v-checkbox
        class="mt-0 mr-1"
        v-model="register.license"
        :rules="[rules.required]"
        dense
      >
        <template v-slot:label>
          <a href="#" class="text-decoration-none"> قوانین و مقررات </a>
        </template></v-checkbox
      >
    </v-col>
    <v-col cols="12" class="px-0 d-flex">
      <v-spacer class="d-md-block d-none"></v-spacer>
      <v-col cols="12" md="6" class="px-0">
        <btn-submit> ثبت نام </btn-submit>
      </v-col>
    </v-col>
  </v-form>
</template>

<script>
import fromRules from "@applets/commen/form/mixins/rules";
import { mapActions } from "vuex";
import { authTypes } from "@applets/witrino/auth/src/store/type";
import BtnSubmit from "@applets/witrino/auth/src/components/BtnSubmit.vue";
import loadingFormAuth from "../../mixins/loading";

export default {
  components: {
    BtnSubmit,
  },
  mixins: [fromRules, loadingFormAuth],
  data() {
    return {
      registerform: {
        mobile: null,
        lisence: false,
      },
    };
  },
  methods: {
    ...mapActions("auth/register", { register: authTypes.AUTH_REGISTER_ASYNC }),
    registerSubmited() {
      if (this.$refs.registerRef.validate()) this.register(this.registerform);
    },
  },
};
</script>

<style lang="scss" scoped></style>
