<template>
  <v-form ref="forgetPass" @submit.prevent="forgetPassSubmit">
    <v-col cols="12">
      <v-text-field
        v-model="forgetPassFrom.mobile"
        :loading="fromLoading"
        outlined
        :rules="[rules.required]"
        label="شماره تماس خود را وارد کنید"
        placeholder="شماره تماس"
        prepend-inner-icon="mdi-phone"
        background-color="#F2F2F2"
        required
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
import { mapActions } from "vuex";
import FormMixin from "@shared/mixins/form";
import { authTypes } from "@applets/auth/src/store/type";
import BtnSubmit from "@applets/auth/src/components/BtnSubmit.vue";
export default {
  components: {
    BtnSubmit,
  },
  mixins: [FormMixin],
  data() {
    return {
      forgetPassFrom: {
        mobile: null,
      },
    };
  },
  methods: {
    ...mapActions("auth/forgetpass", {
      forgetPassAsync: authTypes.AUTH_FORGET_PASS_ASYNC,
    }),
    forgetPassSubmit() {
      if (this.$refs.forgetPass.validate())
        this.forgetPassAsync(this.forgetPassFrom);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-application .text-caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em !important;
  font-family: Vazir !important;
}
</style>
