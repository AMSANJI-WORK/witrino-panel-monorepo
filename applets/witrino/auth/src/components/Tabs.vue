<template>
  <v-sheet class="transparent" width="100%">
    <v-tabs
      grow
      :height="60"
      v-model="tab"
      slider-size="0"
      class="rounded-t-xl"
      :show-arrows="false"
    >
      <v-tab
        key="register"
        active-class="light-blue white--text rounded-bl-xl rounded-tr-xl"
        >ثبت نام</v-tab
      >
      <v-tab
        key="login"
        active-class="light-blue white--text rounded-br-xl rounded-tl-xl"
        >ورود
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="pa-md-6 pa-sm-3 px-3 rounded-b-lg">
      <v-tab-item key="register">
        <RegisterFrom />
      </v-tab-item>
      <v-tab-item key="login">
        <LoginForm />
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>

<script>
import LoginForm from "@applets/witrino/auth/src/components/Form/Login.vue";
import RegisterFrom from "@applets/witrino/auth/src/components/Form/Register.vue";
export default {
  components: {
    LoginForm,
    RegisterFrom,
  },
  data: () => ({
    tab: null,
  }),
};
</script>

<style lang="scss" scoped></style>
